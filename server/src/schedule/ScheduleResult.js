export default class ScheduleResult {
  constructor() {
    this.success = true;
    this.error = null;
  }

  addError(error) {
    this.error = error;
    this.success = false;
  }

  isSuccess() {
    return this.success;
  }
}
