import Vue from 'vue';
import Router from 'vue-router';
import DemoNav from '../../examples/demo-nav.vue';
import DemoLoading from '../../examples/demo-loading.vue';
import DemoCheckbox from '../../examples/demo-checkbox.vue';
import DemoRadio from '../../examples/demo-radio.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DemoNav',
      component: DemoNav
    },
    {
      path: '/demo-loading',
      name: 'DemoLoading',
      component: DemoLoading
    },
    {
      path: '/demo-checkbox',
      name: 'DemoCheckbox',
      component: DemoCheckbox
    },
    {
      path: '/demo-radio',
      name: 'DemoRadio',
      component: DemoRadio
    }
  ]
});
