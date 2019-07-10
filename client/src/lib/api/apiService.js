/* eslint-disable no-param-reassign */
import TaskRepository from './taskRepository';
import PipelineRepository from './pipelineRepository';

const repositories = {
  task: TaskRepository,
  pipeline: PipelineRepository,

};

export const ApiService = {
  get: name => repositories[name],
};


export const ApiServicePlugin = {
  install(Vue) {
    Vue.prototype.$apiService = ApiService;
  },
};
