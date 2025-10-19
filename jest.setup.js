import '@testing-library/jest-dom/extend-expect';
// Mock electron safeStorage and app paths globally
jest.mock('electron', () => {
  return {
    safeStorage: {
      isEncryptionAvailable: () => true,
      encryptString: (s) => Buffer.from('enc:' + s),
      decryptString: (buf) => buf.toString().replace(/^enc:/, '')
    },
    app: {
      getPath: (name) => '/tmp'
    }
  };
});
