const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  let win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile(path.join(__dirname, "pages/index.html"));
}

app.on("ready", createWindow);
