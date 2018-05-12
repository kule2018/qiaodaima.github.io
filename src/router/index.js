import Vue from 'vue';
import Router from 'vue-router';

import Doc from '../../examples/doc.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Doc',
      component: Doc
    }
  ]
});
