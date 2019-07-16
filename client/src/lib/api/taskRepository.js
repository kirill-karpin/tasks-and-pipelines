import http from '../http/client';

const resource = '/tasks';

export default {
  get() {
    return http.request({
      url: `${resource}`,
    });
  },
  getById(id) {
    return http.request({
      url: `${resource}/${id}/`,
    });
  },
  delete(id) {
    return http.request({
      url: `${resource}/${id}/`,
      method: 'delete',
      data: {
        id,
      },
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
