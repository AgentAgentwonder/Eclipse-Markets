export class RpcFallbackManager {
  constructor(endpoints=[]) { this.endpoints = endpoints; this.index = 0; }
  pickFastest() { return this.endpoints.length ? this.endpoints[0] : null; }
  rotate() { this.index = (this.index+1) % this.endpoints.length; return this.endpoints[this.index]; }
}
