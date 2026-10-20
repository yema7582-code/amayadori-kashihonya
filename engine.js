/* 雨宿りの貸本屋 — minimal VN engine. Loads game.json + scenes/*.md at runtime. */
(() => {
'use strict';
const $ = s => document.querySelector(s);
const LS = 'amayadori_';
let lang = localStorage.getItem('amayadori_lang') || 'ja', relang = false;
let G, P = [], labels = {}, S, busy = false, typing = null, autoT = null, mode = null;
const cfg = Object.assign({speed: 60, auto: 1800, skipAll: false}, JSON.parse(localStorage.getItem(LS + 'cfg') || '{}'));
const read = new Set(JSON.parse(localStorage.getItem(LS + 'read') || '[]'));

// ---------- loading ----------
async function getText(path) {
  if (window.VN_BUNDLE && window.VN_BUNDLE[path] != null && location.protocol === 'file:') return window.VN_BUNDLE[path];
  try { const r = await fetch(path, {cache: 'no-cache'}); if (!r.ok) throw r.status; return await r.text(); }
  catch (e) { if (window.VN_BUNDLE && window.VN_BUNDLE[path] != null) return window.VN_BUNDLE[path]; throw new Error('load failed: ' + path); }
}
// ---------- parser ----------
function parse(src, file) {
  const out = [], lines = src.replace(/\r/g, '').split('\n');
  let choice = null;
  lines.forEach((raw, i) => {
    const line = raw.trim(), at = {file, line: i + 1};
    if (!line || line.startsWith('#') || line.startsWith('//')) return;
    if (choice) {
      if (/^\[\/choice\]$/.test(line)) { out.push(choice); choice = null; return; }
      const m = line.match(/^-\s*(.+?)\s*->\s*(\S+)$/);
      if (m) choice.items.push({text: m[1].replace(/^["“]|["”]$/g, ''), to: m[2]});
      else console.warn('bad choice line', at, line);
      return;
    }
    const t = line.match(/^\[(\w+)\s*(.*?)\]$/);
    if (t) {
      const [, tag, arg] = t;
      if (tag === 'choice') { choice = {op: 'choice', items: [], at}; return; }
      if (tag === 'label') { labels[arg] = P.length + out.length; return; }
      out.push({op: tag, arg, at});
      return;
    }
    const d = line.match(/^([^:：「」（）\[]{1,32})[:：]\s*(.*)$/);
    out.push(d ? {op: 'say', name: d[1].trim(), text: d[2], at} : {op: 'say', name: '', text: line, at});
  });
  if (choice) { console.warn('unclosed [choice] in', file); out.push(choice); }
  return out;
}
async function sceneText(f) {
  // scenes/<lang>/f -> scenes/ja/f (fallback language) -> scenes/f (legacy root)
  for (const path of [`scenes/${lang}/${f}`, `scenes/${G.fallbackLanguage || 'ja'}/${f}`, `scenes/${f}`]) {
    try { return await getText(path); } catch (e) {}
  }
  throw new Error('scene not found: ' + f);
}
async function load() {
  G = G || JSON.parse(await getText('game.json'));
  P = []; for (const k in labels) delete labels[k];
  for (const f of [...G.scenes, ...G.extra]) {
    const startLabel = '__' + f;
    labels[startLabel] = P.length;
    P.push(...parse(await sceneText(f), f));
    if (G.extra.includes(f) && P[P.length - 1].op !== 'end') P.push({op: 'end', arg: ''});
  }
  // validate jumps
  for (const c of P) {
    const targets = c.op === 'jump' ? [c.arg] : c.op === 'choice' ? c.items.map(x => x.to) : c.op === 'if' ? [c.arg.split('->')[1]?.trim()] : [];
    for (const l of targets) if (!(l in labels)) console.error('MISSING LABEL', l, c.at);
  }
  for (const e of G.endings) if (!(e.label in labels)) console.error('MISSING ENDING LABEL', e.label);
}
// ---------- expressions ----------
function evalExpr(expr) {
  const scope = new Proxy({}, {has: () => true, get: (_, k) => k === Symbol.unscopables ? undefined : (k in S.flags ? S.flags[k] : (k in Math ? Math[k] : 0))});
  try { return !!(new Function('s', 'with(s){return (' + expr + ')}'))(scope); }
  catch (e) { console.error('bad expr', expr, e); return false; }
}
function setFlag(arg) {
  const m = arg.match(/^(\w+)\s*([+-]|=)\s*(-?\w+)$/);
  if (!m) return console.error('bad flag', arg);
  let [, k, op, v] = m; v = v === 'true' ? 1 : v === 'false' ? 0 : Number(v);
  let cur = S.flags[k] || 0;
  cur = op === '=' ? v : op === '+' ? cur + v : cur - v;
  const lim = G.flagLimits[k]; if (lim) cur = Math.max(lim[0], Math.min(lim[1], cur));
  S.flags[k] = cur;
}
function resolveEnding() {
  for (const e of G.endings) if (evalExpr(e.when)) return e;
  return {id: 'default', label: G.defaultEnding};
}
// ---------- rendering ----------
function speakerId(name) {
  if (!name) return null; const A = G.nameAliases || {};
  return (A[lang] || {})[name] || (A.ja || {})[name] || Object.values(A).reduce((r, m) => r || (typeof m === 'object' ? m[name] : null), null) || null;
}
function renderBg() {
  const b = G.bgs[S.bg] || {label: {}, colors: ['#333', '#111']}, el = $('#bg');
  el.style.background = (b.image ? `url("${b.image}") center/cover no-repeat, ` : '') + `linear-gradient(${b.colors[0]},${b.colors[1]})`;
  el.classList.toggle('img', !!b.image);
  $('#bg').classList.toggle('rain', /rain/.test(S.bg || ''));
  const lb = b.label[lang] || b.label.ja || S.bg; $('#bglabel').textContent = lb ? `[BG] ${lb}` : '';
}
function renderChars() {
  const el = $('#chars'); el.innerHTML = '';
  for (const [id, ex] of Object.entries(S.chars)) {
    const c = G.colors[id] || '#777', d = document.createElement('div');
    d.className = 'char' + (id === 'soichiro' ? ' ghost' : ''); d.dataset.id = id;
    d.innerHTML = `<div class="body" style="background:${c}"></div><div class="head" style="background:${c}"></div><div class="lbl">${(G.names[lang] || G.names.ja)[id] || id}<br>（${ex}）</div>`;
    el.appendChild(d);
  }
}
function render() { renderBg(); renderChars(); }
function status() { $('#status').textContent = (mode ? mode.toUpperCase() + ' ' : ''); document.querySelectorAll('#menu button').forEach(b => b.classList.toggle('on', b.dataset.a === mode)); }
// ---------- audio stubs ----------
const audio = {bgm: n => { S.bgm = n; }, se: n => {}}; // silent stubs; drop files into audio/ later

// ---------- runner ----------
function step() {
  while (S.pc < P.length) {
    const c = P[S.pc++];
    switch (c.op) {
      case 'bg': S.bg = c.arg; if (c.arg === 'black') S.chars = {}; render(); break;
      case 'show': { const [id, ex = 'normal'] = c.arg.split(/\s+/); S.chars[id] = ex; renderChars(); break; }
      case 'hide': if (c.arg) delete S.chars[c.arg]; else S.chars = {}; renderChars(); break;
      case 'bgm': audio.bgm(c.arg); break;
      case 'se': audio.se(c.arg); break;
      case 'flag': setFlag(c.arg); break;
      case 'jump': S.pc = labels[c.arg]; break;
      case 'if': { const [cond, to] = c.arg.split('->').map(s => s.trim()); if (evalExpr(cond)) S.pc = labels[to]; break; }
      case 'ending': { const e = resolveEnding(); S.ending = e.id; S.pc = labels[e.label]; break; }
      case 'title': return showEnd(endingTitle(c.arg));
      case 'end': return toTitle();
      case 'say': return say(c);
      case 'choice': return showChoice(c);
      default: console.warn('unknown tag', c.op, c.at);
    }
  }
  toTitle();
}
function say(c) {
  const idx = S.pc - 1; S.cur = c;
  $('#name').textContent = c.name; const who = speakerId(c.name); S.speaker = who;
  $('#name').style.background = (who && G.colors[who]) || '#2f5d50';
  document.querySelectorAll('.char').forEach(e => e.classList.toggle('dim', !!who && who in S.chars && e.dataset.id !== who));
  S.log.push({name: c.name, text: c.text}); if (S.log.length > 300) S.log.shift();
  const wasRead = read.has(idx); read.add(idx); saveRead();
  const el = $('#text'); clearTimeout(autoT);
  if (mode === 'skip' && !wasRead && !cfg.skipAll) { mode = null; status(); }
  const delay = mode === 'skip' || cfg.speed >= 100 ? 0 : Math.round(80 - cfg.speed * 0.78);
  if (!delay) { el.textContent = c.text; typing = null; afterType(); return; }
  let i = 0; el.textContent = '';
  typing = setInterval(() => { el.textContent = c.text.slice(0, ++i); if (i >= c.text.length) { clearInterval(typing); typing = null; afterType(); } }, delay);
}
function afterType() {
  if (mode === 'skip') autoT = setTimeout(advance, 30);
  else if (mode === 'auto') autoT = setTimeout(advance, cfg.auto);
}
function advance() {
  if (busy || !$('#choices').classList.contains('hidden') || anyScreen()) return;
  if (typing) { clearInterval(typing); typing = null; $('#text').textContent = S.cur.text; afterType(); return; }
  clearTimeout(autoT); step();
}
function showChoice(c) {
  if (mode === 'skip') { mode = null; status(); }
  clearTimeout(autoT);
  const box = $('#choices'); box.innerHTML = '';
  c.items.forEach((it, i) => {
    const b = document.createElement('button'); b.textContent = it.text; b.dataset.i = i;
    b.onclick = e => { e.stopPropagation(); box.classList.add('hidden'); S.log.push({name: '▶', text: it.text}); S.choices.push(it.to); S.pc = labels[it.to]; step(); };
    box.appendChild(b);
  });
  box.classList.remove('hidden');
}
function endingTitle(raw) {
  const m = raw.match(/END\s*([A-Z])\b/), id = m ? m[1] : S.ending, map = G.endingTitles || {};
  return (map[lang] || {})[id] || raw;
}
function showEnd(t) {
  mode = null; status(); clearTimeout(autoT);
  const e = $('#endcard'); e.textContent = t; e.classList.remove('hidden');
  const seen = new Set(JSON.parse(localStorage.getItem(LS + 'endings') || '[]')); seen.add(t); localStorage.setItem(LS + 'endings', JSON.stringify([...seen]));
  e.onclick = () => { e.classList.add('hidden'); step(); };
}
// ---------- state / screens ----------
function fresh() { return {pc: 0, flags: Object.assign({}, G.flags), bg: 'black', chars: {}, bgm: null, log: [], choices: [], ending: null}; }
function start(state) {
  clearTimeout(autoT); clearInterval(typing); typing = null;
  S = state; hideAll(); $('#textbox').classList.remove('hidden'); $('#choices').classList.add('hidden');
  render(); mode = null; status();
  if (state.resumeAt != null) { S.pc = state.resumeAt; delete S.resumeAt; }
  step();
}
function toTitle() { clearTimeout(autoT); clearInterval(typing); typing = null; mode = null; status(); hideAll(); $('#textbox').classList.add('hidden'); $('#choices').classList.add('hidden'); $('#endcard').classList.add('hidden'); S = null; $('#title').classList.remove('hidden'); }
function hideAll() { document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden')); }
function anyScreen() { return [...document.querySelectorAll('.screen')].some(s => !s.classList.contains('hidden')) || !$('#endcard').classList.contains('hidden'); }
let back = null;
function open(id) { back = [...document.querySelectorAll('.screen')].find(s => !s.classList.contains('hidden'))?.id || null; mode = null; status(); clearTimeout(autoT); hideAll(); $(id).classList.remove('hidden'); }
function close() { hideAll();
  if (relang && S) { relang = false; const c = P[S.pc - 1]; if (c && (c.op === 'say' || c.op === 'choice')) { if (c.op === 'say') S.log.pop(); S.pc--; $('#choices').classList.add('hidden'); render(); step(); } } if (back === 'title' || !S) $('#title').classList.remove('hidden'); back = null; }
function saveRead() { localStorage.setItem(LS + 'read', JSON.stringify([...read])); }
function slotKey(i) { return LS + 'slot' + i; }
function openSlots(kind) {
  open('#slots'); $('#slots-h').textContent = kind === 'save' ? T().save : T().loadT;
  const list = $('#slot-list'); list.innerHTML = '';
  for (let i = 1; i <= 3; i++) {
    const d = JSON.parse(localStorage.getItem(slotKey(i)) || 'null');
    const b = document.createElement('button'); b.dataset.slot = i;
    b.textContent = `${T().slot}${i}：` + (d ? `${d.date} ／ ${d.preview}` : T().empty);
    b.onclick = () => {
      if (kind === 'save') {
        const at = S.pc - 1; // re-run the current line/choice on load
        const snap = JSON.parse(JSON.stringify(S)); delete snap.cur;
        snap.resumeAt = at;
        localStorage.setItem(slotKey(i), JSON.stringify({date: new Date().toLocaleString('ja-JP'), preview: (S.cur?.text || '').slice(0, 24), state: snap}));
        openSlots('save');
      } else if (d) { const st = d.state; if (P[st.resumeAt]?.op === 'say') st.log = st.log.slice(0, -1); start(st); }
    };
    list.appendChild(b);
  }
}
function openLog() { open('#log'); const l = $('#log-list'); l.innerHTML = ''; S.log.forEach(x => { const p = document.createElement('p'); p.textContent = (x.name ? x.name + '：' : '') + x.text; l.appendChild(p); }); l.scrollTop = 1e9; }

// ---------- input ----------
function bind() {
  $('#textbox').addEventListener('click', e => { if (e.target.closest('#menu')) return; if (mode) { mode = null; status(); } advance(); });
  $('#menu').addEventListener('click', e => {
    const a = e.target.dataset.a; if (!a) return; e.stopPropagation();
    if (a === 'auto' || a === 'skip') { mode = mode === a ? null : a; status(); if (mode && !typing) { clearTimeout(autoT); afterType(); } }
    else if (a === 'log') openLog(); else if (a === 'save') openSlots('save'); else if (a === 'load') openSlots('load');
    else if (a === 'config') open('#config'); else if (a === 'title') { if (confirm(T().toTitle)) toTitle(); }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); if (S && $('#choices').classList.contains('hidden')) { if (!$('#endcard').classList.contains('hidden')) $('#endcard').click(); else advance(); } }
    if (e.code === 'Escape' && anyScreen()) close();
  });
  document.addEventListener('wheel', e => { if (S && e.deltaY < 0 && !anyScreen()) openLog(); });
  document.querySelectorAll('.close').forEach(b => b.onclick = close);
  $('#t-start').onclick = () => start(fresh());
  $('#t-load').onclick = () => openSlots('load');
  $('#t-config').onclick = () => open('#config');
  const sp = $('#cfg-speed'), au = $('#cfg-auto'), sk = $('#cfg-skipall');
  sp.value = cfg.speed; au.value = cfg.auto; sk.checked = cfg.skipAll;
  const saveCfg = () => { cfg.speed = +sp.value; cfg.auto = +au.value; cfg.skipAll = sk.checked; localStorage.setItem(LS + 'cfg', JSON.stringify(cfg)); };
  sp.oninput = au.oninput = sk.onchange = saveCfg;
}
window.VN = {speakerId: n => speakerId(n), get state() { return S; }, get program() { return P; }, labels, cfg, resolveEnding, evalExpr};
function T() { return G.ui[lang] || G.ui.ja; }
function applyUI() {
  const t = T(); document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.querySelectorAll('[data-i]').forEach(e => e.textContent = t[e.dataset.i]);
  document.querySelectorAll('#menu button').forEach((b, i) => b.textContent = t.menu[i]);
  document.title = t.title;
  document.querySelectorAll('.langsel').forEach(box => {
    box.innerHTML = '';
    for (const [code, label] of Object.entries(G.languages)) {
      const b = document.createElement('button'); b.textContent = label; b.dataset.lang = code; b.className = code === lang ? 'on' : '';
      b.onclick = e => { e.stopPropagation(); setLang(code); }; box.appendChild(b);
    }
  });
}
async function setLang(code) {
  if (code === lang) return;
  lang = code; localStorage.setItem(LS + 'lang', code);
  applyUI(); await load(); if (S) { relang = true; render(); }
}
window.VN.setLang = setLang; Object.defineProperty(window.VN, 'lang', {get: () => lang});
load().then(() => { applyUI(); bind(); window.VN.ready = true; }).catch(e => { document.body.insertAdjacentHTML('beforeend', `<pre style="color:#f88">${e}</pre>`); });
})();
