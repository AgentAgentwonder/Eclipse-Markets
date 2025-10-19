module.exports = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true }) }));
