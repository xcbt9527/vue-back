/**
 * Created by baird on 17/11/17.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./index.html";
import mment from"./menu.vue";
@Component({
  template: htmltepl,
  name: 'index',
  components: {
    mment
  }
})

export default class article extends Vue {
}
