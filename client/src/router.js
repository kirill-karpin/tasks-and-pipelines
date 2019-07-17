import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TaskDetail from './views/TaskDetail.vue';
import TaskNew from './views/TaskNew.vue';
import Tasks from './views/Tasks.vue';
import PipelineNew from './views/PipelineNew.vue';
import Pipelines from './views/Pipelines.vue';
import UsersList from './views/UsersLIst.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tasks/',
      name: 'tasks',
      component: Tasks,
    },
    {
      path: '/tasks/:id/',
      name: 'task-detail',
      component: TaskDetail,
    },
    {
      path: '/tasks-new/',
      name: 'task-new',
      component: TaskNew,
    },
    {
      path: '/pipelines/',
      name: 'pipeline',
      component: Pipelines,
    },
    {
      path: '/pipelines-new/',
      name: 'pipeline-new',
      component: PipelineNew,
    },
    {
      path: '/users/',
      name: 'users',
      component: UsersList,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
