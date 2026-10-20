// Electron wrapper: serves the game over a custom app:// scheme so fetch() of scenes works.
const {app, BrowserWindow, protocol, net, Menu} = require('electron');
const path = require('path'), url = require('url');
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: {standard: true, secure: true, supportFetchAPI: true}}]);
app.whenReady().then(() => {
  const root = path.join(__dirname, 'game');
  protocol.handle('app', req => {
    const p = path.normalize(path.join(root, decodeURIComponent(new URL(req.url).pathname)));
    if (!p.startsWith(root)) return new Response('forbidden', {status: 403});
    return net.fetch(url.pathToFileURL(p).toString());
  });
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({width: 1280, height: 720, backgroundColor: '#000', title: '雨宿りの貸本屋', autoHideMenuBar: true});
  w.loadURL('app://game/index.html');
  if (process.env.VN_SMOKE) setTimeout(async () => { const ok = await w.webContents.executeJavaScript('!!(window.VN && VN.ready)'); console.log('VN_SMOKE ready=' + ok); app.quit(); }, 4000);
});
app.on('window-all-closed', () => app.quit());
