import Vue from 'vue';
import Router from 'vue-router';
import Doc from '../../examples/doc.vue';
import TestAxios from '../../test/test-axios.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Doc
    },
    {
      path: '/test-axios',
      component: TestAxios
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc
    }
  ]
});
