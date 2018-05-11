import Vue from 'vue';
import Router from 'vue-router';
import Doc from '../../examples/doc.vue';
import DemoLoading from '../../examples/demo-loading.vue';
import DemoCheckbox from '../../examples/demo-checkbox.vue';
import DemoRadio from '../../examples/demo-radio.vue';
import DemoInput from '../../examples/demo-input.vue';
import DemoDialog from '../../examples/demo-dialog.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Doc',
      component: Doc
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
    },
    {
      path: '/demo-input',
      name: 'DemoInput',
      component: DemoInput
    },
    {
      path: '/demo-dialog',
      name: 'DemoDialog',
      component: DemoDialog
    }
  ]
});
