const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
  console.log('Aplicação iniciada');
  let mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    }
  });

  //mainWindow.loadURL('https://www.alura.com.br');
  console.log(__dirname)
  //mainWindow.loadURL(`file://${__dirname}/build/index.html`);
  mainWindow.loadURL('http://localhost:3000');

});

app.on('window-all-closed', () => {
  app.quit();
});