/**
 * Created by baird on 17/11/17.
 */
/**
 * Created by momo on 2017/11/13.
 */

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import htmltepl from "./login.html";
import src from '../../utils/http';
import api from "../../utils/api";
@Component({
  template: htmltepl,
  name: 'login',
  components: {}
})

export default class article extends Vue {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  toLoading() {
    this.loading = true;
    (this.$router as any).push({name: 'index', params: {userId: 1}});
    this.loading = false;
  }
}
