const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('secureConfig', {
  getAll: () => ipcRenderer.invoke('secure:get-env'),
  set: (key, value) => ipcRenderer.invoke('secure:set-env', key, value),
  saveKey: (name, value) => ipcRenderer.invoke('secure:save-key', name, value),
  getKey: (name) => ipcRenderer.invoke('secure:get-key', name),
  rotateAll: () => ipcRenderer.invoke('rotate:all')
});

ipcRenderer.on('vault:lock', ()=> { /* renderer can handle lock */ });
