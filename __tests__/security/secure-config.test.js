import { saveSecureConfig, loadSecureConfig, getEnv } from '../../secure-config.js';
import fs from 'fs';
import path from 'path';
import { app } from 'electron';

describe('secure-config', () => {
  const tmpPath = path.join('/tmp', 'secure-config.json');
  beforeEach(() => { if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath); });
  it('saves and loads secure config', () => {
    const ok = saveSecureConfig({ TEST_KEY: 'secret-value' });
    expect(ok).toBe(true);
    const loaded = loadSecureConfig();
    expect(loaded.TEST_KEY).toBe('secret-value');
  });
  it('getEnv merges dotenv and secure config', () => {
    // ensure no exception thrown when .env absent
    const env = getEnv();
    expect(typeof env).toBe('object');
  });
});
