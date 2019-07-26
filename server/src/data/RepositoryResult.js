export default class RepositoryResult {
  constructor() {
    this.status = true;
    this.err = null;
    this.data = null;
  }

  isSuccess() {
    return !!this.status;
  }

  setError(err) {
    this.err = err;
    this.status = false;
  }

  count() {
    return this.data.length;
  }
}
