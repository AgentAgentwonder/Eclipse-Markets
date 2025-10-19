import { rotateAllProviders } from '../../services/rotator.js';
import * as secureConfig from '../../secure-config.js';

jest.mock('../../secure-config.js', () => ({
  saveSecureConfig: jest.fn(),
  loadSecureConfig: jest.fn(() => ({}))
}));

describe('rotator.rotateAllProviders', () => {
  it('should create rotation records for providers', async () => {
    const res = await rotateAllProviders();
    expect(res).toBe(true);
    expect(secureConfig.saveSecureConfig).toHaveBeenCalled();
    // ensure at least one rotation entry was saved
    const calls = secureConfig.saveSecureConfig.mock.calls;
    expect(calls.length).toBeGreaterThan(0);
    const [arg] = calls[0];
    expect(Object.keys(arg)[0]).toMatch(/rotation_/);
  }, 10000);
});
