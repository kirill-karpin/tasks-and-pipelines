export default class ScheduleTask {

  constructor(params) {
    this.id = params.id;
    this.data = params;
    this.runBefore = params.before;
    this.runAfter = params.after;
    this.run = params.run;
    this.emit = params.emit;
  }


  async exec() {
    if (typeof this.runBefore === 'function') {
      await this.runBefore();
    }

    if (typeof this.run === 'function') {
      await this.run();
    }

    if (typeof this.runAfter === 'function') {
      await this.runAfter();
    }

    if (typeof this.emit === 'function') {
      this.emit(this.data);
    }
  }
}
