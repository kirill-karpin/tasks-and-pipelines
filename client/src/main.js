import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ApiServicePlugin } from './lib/api/apiService';

Vue.config.productionTip = false;
Vue.prototype.$events = new Vue();
Vue.use(ApiServicePlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
