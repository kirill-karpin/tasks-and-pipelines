import axios from 'axios';
import HttpResult from './result';

export class HttpClient {
  constructor(props) {
    this.baseUrl = props.baseUrl;
    this.token = props.token;
  }

  async request(options) {
    const result = new HttpResult();
    const request = options;

    try {
      if (Object.prototype.hasOwnProperty.call(request, 'data')) {
        if (typeof request.data === 'object') {
          if (!(request.data instanceof FormData)) {
            request.data = this.toFormData(request.data);
          }
        } else if (typeof options.data === 'string') {
          throw Error('Only object pass for data');
        }
      } else {
        request.data = this.toFormData({});
      }

      request.baseURL = this.baseUrl;

      const response = await axios(request);

      result.data = response.data;
      result.status = response.status;
      result.resp = response;
    } catch (error) {
      result.errMsg = error.message;
      result.err = error;

      if (error.response) {
        result.status = error.response.status;
        result.data = error.response.data;
        result.resp = error.response;
      } else if (error.request) {
        global.console.log(error.request);
      } else {
        global.console.log('Error', error.message);
      }
    }

    return result;
  }

  toFormData(obj, form, namespace) {
    const fd = form || new FormData();
    let formKey;

    for (const property in obj) {
      if (obj.hasOwnProperty(property) && obj[property]) {
        if (namespace) {
          formKey = `${namespace}[${property}]`;
        } else {
          formKey = property;
        }
        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        } else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          this.toFormData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property]);
        }
      }
    }
    return fd;
  }
}

let BASE_URL = '/';
let TOKEN = null;

if (typeof process !== 'undefined') {
  if (Object.prototype.hasOwnProperty.call(process.env, 'VUE_APP_BASE_URL')) {
    BASE_URL = process.env.VUE_APP_BASE_URL;
  }
  if (Object.prototype.hasOwnProperty.call(process.env, 'VUE_APP_TOKEN')) {
    TOKEN = process.env.VUE_APP_TOKEN;
  }
}
const http = new HttpClient({
  baseUrl: BASE_URL,
  token: TOKEN,
});

export default http;
