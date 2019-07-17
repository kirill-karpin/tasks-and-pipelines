import http from '../http/client';

const resource = '/pipelines';

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
  async save(id, data) {
    return http.request({
      url: `${resource}/${id}/`,
      method: 'patch',
      data,
    });
  },

  async run(id) {
    return http.request({
      url: `${resource}/${id}/run/`,
      method: 'get',
    });
  },

};
