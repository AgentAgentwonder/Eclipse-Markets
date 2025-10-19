import { startHealthChecks } from '../../services/healthcheck.js';

jest.useFakeTimers();
describe('healthcheck', () => {
  it('schedules health checks and calls logger', () => {
    const logger = { info: jest.fn(), error: jest.fn() };
    startHealthChecks(logger);
    // initial call
    expect(logger.info).toHaveBeenCalled();
    // advance timers to trigger interval
    jest.advanceTimersByTime(60_000);
    expect(logger.info).toHaveBeenCalledTimes(2);
    jest.useRealTimers();
  });
});
