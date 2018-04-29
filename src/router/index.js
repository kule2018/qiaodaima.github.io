import Vue from 'vue';
import Router from 'vue-router';
import Loading from '../components/loading/main.vue';
import Demo from '../../examples/demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
});
