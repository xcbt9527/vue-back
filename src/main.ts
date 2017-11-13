/**
 * Created by momo on 2017/11/13.
 */
import Vue from 'vue'
import App from './App'
import router from './router';
import iview from "iview";
Vue.use(iview);
import "./less/theme/index.less";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
