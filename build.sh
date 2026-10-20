#!/bin/sh
# 1) moves writer scene files dropped in scenes/ root into scenes/ja/ (unchanged)
# 2) checks en/zh tag parity vs ja  3) regenerates scenes.bundle.js
# 4) builds dist/amayadori-kashihonya-web.zip (itch.io) and, if ELECTRON_ZIP is set, the Windows zip
set -e; cd "$(dirname "$0")"
for f in scenes/*.md; do
  [ -e "$f" ] || continue; b=$(basename "$f")
  if [ -e "scenes/ja/$b" ] && ! head -1 "scenes/ja/$b" | grep -q STUB; then echo "WARN: scenes/$b and non-stub scenes/ja/$b both exist; left in place"; continue; fi
  mv "$f" "scenes/ja/$b"; echo "moved scenes/$b -> scenes/ja/$b"
done
node -e '
const fs=require("fs");const g=JSON.parse(fs.readFileSync("game.json"));const b={"game.json":fs.readFileSync("game.json","utf8")};
const tags=s=>s.split("\n").map(l=>l.trim()).filter(l=>l.startsWith("[")).join("\n");
for(const lang of Object.keys(g.languages))for(const f of [...g.scenes,...g.extra]){const p=`scenes/${lang}/${f}`;if(!fs.existsSync(p))continue;b[p]=fs.readFileSync(p,"utf8");
 if(lang!=="ja"&&fs.existsSync("scenes/ja/"+f)&&tags(b[p])!==tags(fs.readFileSync("scenes/ja/"+f,"utf8")))console.log("WARN tag mismatch:",p);}
fs.writeFileSync("scenes.bundle.js","window.VN_BUNDLE="+JSON.stringify(b)+";\n");'
FILES="index.html style.css engine.js game.json scenes.bundle.js scenes img README.md LICENSE CREDITS.md"
mkdir -p ../dist
python3 - ../dist/amayadori-kashihonya-web.zip "" $FILES <<'PY'
import sys,zipfile,os
out,prefix,*items=sys.argv[1:]
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
  for a in items:
    for r,d,fs in (os.walk(a) if os.path.isdir(a) else [('',[],[a])]):
      for f in fs: p=os.path.join(r,f); z.write(p,prefix+p)
PY
echo "web zip ok"
if [ -n "$ELECTRON_ZIP" ]; then
  W=$(mktemp -d)/Amayadori; mkdir -p "$W"; python3 -c "import zipfile,sys;zipfile.ZipFile(sys.argv[1]).extractall(sys.argv[2])" "$ELECTRON_ZIP" "$W"
  mv "$W/electron.exe" "$W/Amayadori.exe"; rm -f "$W/resources/default_app.asar"
  mkdir -p "$W/resources/app/game"; cp win/main.js win/package.json "$W/resources/app/"; cp -r $FILES "$W/resources/app/game/"
  cp LICENSE "$W/LICENSE-game.txt"; cp CREDITS.md "$W/"; printf 'Amayadori.exe をダブルクリックで起動 / Double-click Amayadori.exe to play.\r\nUnsigned build: Windows SmartScreen may warn -> "More info" -> "Run anyway".\r\n' > "$W/README.txt"
  (cd "$(dirname "$W")" && rm -f "$OLDPWD/../dist/amayadori-kashihonya-windows.zip" && python3 - "$OLDPWD/../dist/amayadori-kashihonya-windows.zip" "" Amayadori <<'PY'
import sys,zipfile,os
out,prefix,*items=sys.argv[1:]
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
  for a in items:
    for r,d,fs in os.walk(a):
      for f in fs: p=os.path.join(r,f); z.write(p,prefix+p)
PY
  ); echo "windows zip ok"
fi
