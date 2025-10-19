import fs from 'fs';
import path from 'path';
import { safeStorage, app } from 'electron';
import dotenv from 'dotenv';

const configPath = path.join(app.getPath('userData'), 'secure-config.json');

export function loadSecureConfig() {
  if (!fs.existsSync(configPath)) return {};
  try {
    const data = JSON.parse(fs.readFileSync(configPath,'utf8'));
    const decrypted = {};
    for (const [k,v] of Object.entries(data)) decrypted[k] = safeStorage.decryptString(Buffer.from(v,'base64'));
    return decrypted;
  } catch (err) { console.error('Failed loading secure config', err); return {}; }
}

export function saveSecureConfig(newConfig) {
  try {
    const existing = loadSecureConfig();
    const merged = { ...existing, ...newConfig };
    const out = {};
    for (const [k,v] of Object.entries(merged)) out[k] = safeStorage.encryptString(v).toString('base64');
    fs.writeFileSync(configPath, JSON.stringify(out,null,2), { mode: 0o600 });
    return true;
  } catch (err) { console.error('Failed saving secure config', err); return false; }
}

export function getEnv() {
  const secure = loadSecureConfig();
  const fileEnv = dotenv.config({ path: path.join(process.cwd(), '.env') }).parsed || {};
  return { ...fileEnv, ...secure };
}
