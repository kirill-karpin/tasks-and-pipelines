import http from '../http/client';

const resource = '/';

export default {
  get() {
    return http.request({
      url: `${resource}`,
    });
  },
};
