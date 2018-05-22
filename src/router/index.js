import Vue from 'vue';
import Router from 'vue-router';
import Doc from '../../examples/doc.vue';
import Test from '../../examples/test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Doc
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc
    }
  ]
});
