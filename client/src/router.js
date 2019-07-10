import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TaskDetail from './views/TaskDetail.vue';
import TaskList from './views/TaskList.vue';
import PipelineNew from './views/PipelineNew.vue';
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
      path: '/task/',
      name: 'task',
      component: TaskList,
    },
    {
      path: '/task/:id/',
      name: 'task',
      component: TaskDetail,
    },
    {
      path: '/pipeline/',
      name: 'pipeline',
      component: PipelineNew,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
