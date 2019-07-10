import http from '../http/client';

const resource = '/pipeline';

export default {
  add(data) {
    http.request({
      url: resource,
      data,
      method: 'post',
    });
  },
  get(...param) {
    const id = !!param;
    let url = `${resource}`;
    if (id) {
      url = `${resource}/${param}/`;
    }

    return http.request({
      url,
    });
  },
  async save(data) {
    return http.request({
      url: `${resource}/${data.id}/`,
      method: 'post',
      data,
    });
  },

};