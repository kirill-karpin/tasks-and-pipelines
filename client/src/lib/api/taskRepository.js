import http from '../http/client';

const resource = '/task';

export default {
  get() {
    return http.request({
      url: `${resource}`,
    });
  },
  async save(data) {
    return http.request({
      url: `${resource}/`,
      method: 'post',
      data,
    });
  },
};
