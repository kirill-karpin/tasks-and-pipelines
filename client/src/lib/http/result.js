const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;


export default class HttpResult {
  constructor(status = null, resp = null, err = null, data = null) {
    this.status = status;
    this.resp = resp;
    this.err = err;
    this.data = data;
    this.errMsg = null;
  }

  isStatusOk() {
    return this.status === STATUS_OK;
  }

  isStatusNotFound() {
    return this.status === STATUS_NOT_FOUND;
  }
}
