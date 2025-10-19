export class WorkerPool {
  constructor(size=2) { this.size = size; this.workers = []; }
  start() { /* spawn workers */ }
  dispatch(task) { /* assign task */ }
  stop() { /* cleanup */ }
}
