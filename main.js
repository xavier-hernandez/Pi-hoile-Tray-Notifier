const electron = require('electron');
const path = require('path');

const { menubar } = require('menubar');
const {app, BrowserWindow} = electron;

let iconPath = path.join(__dirname, './assets/icons/png/icon.png')

let bw;
function createTray() {
  bw = new BrowserWindow({
    width: 350,
    height: 350,
    skipTaskbar: true,
    show: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  bw.setMenuBarVisibility(false);
  bw.setResizable(false);

  let mb = new menubar({
    icon: iconPath,
    tooltip: 'Pi-Hole Notifier',
    browserWindow: bw
  });
}

app.on('ready', () => {
  createTray();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

