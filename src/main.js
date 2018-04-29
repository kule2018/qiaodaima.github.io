import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/iconfont/iconfont.css';
import './assets/sass/common.scss';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
