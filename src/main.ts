/**
 * Created by momo on 2017/11/13.
 */
import Vue from 'vue'
import App from './App'
import router from './router';
import iview from "iview";
import './components/component';
import vueResource from "vue-resource";
Vue.use(vueResource);
Vue.use(iview);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
