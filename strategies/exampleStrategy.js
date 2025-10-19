export default class ExampleStrategy {
  constructor(cfg) { this.cfg = cfg; }
  async onEvent(event) { /* implement logic */ }
  async onInterval() { /* periodic checks */ }
}
