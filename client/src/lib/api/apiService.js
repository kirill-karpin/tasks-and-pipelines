/* eslint-disable no-param-reassign */
import TaskRepository from './taskRepository';
import PipelineRepository from './pipelineRepository';
import UsersRepository from './UsersRepository';

const repositories = {
  task: TaskRepository,
  pipeline: PipelineRepository,
  users: UsersRepository,
};

export const ApiService = {
  get: name => repositories[name],
};


export const ApiServicePlugin = {
  install(Vue) {
    Vue.prototype.$apiService = ApiService;
  },
};
