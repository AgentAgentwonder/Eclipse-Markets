export function startHealthChecks(logger = console) {
  const CHECK_INTERVAL_MS = 60_000;
  async function check() {
    try { logger.info('Healthcheck tick ' + new Date().toISOString()); }
    catch (e) { logger.error('Healthcheck error: ' + e.message); }
  }
  check();
  setInterval(check, CHECK_INTERVAL_MS);
}
