import { saveSecureConfig } from '../secure-config.js';

export async function rotateAllProviders() {
  const providers = ['helius','supabase','telegram','slack'];
  for (const p of providers) {
    try {
      const record = { provider: p, rotatedAt: new Date().toISOString(), status: 'manual_required' };
      saveSecureConfig({ ['rotation_' + p]: JSON.stringify(record) });
    } catch (e) {
      console.error('Rotation failed for', p, e);
    }
  }
  return true;
}
