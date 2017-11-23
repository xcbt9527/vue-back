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
    let vm = this;
    this.loading = true;
    src.post(api.login, {username: this.username, password: this.password}).then(res => {
      this.loading = false;
      if(res) {
      }else{
        (this.$router as any).push({name: 'index'});
      }
    })
  }
}
