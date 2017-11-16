<template>
  <div class="login">
    <div class="loginbox">
      <div class="p-20">
        <div class="p-10">
          <Input v-model="username">
          <span slot="prepend">账号：</span>
          </Input>
        </div>
        <div class="p-10">
          <Input v-model="password">
          <span slot="prepend">密码：</span>
          </Input>
        </div>
        <div class="btn p-t-10">
          <Button type="primary" :loading="loading" @click="toLoading">登录</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default{
    name: '',
    data() {
      return {
        username: '',
        password: '',
        loading: false,
      };
    },
    mounted() {
    },
    props: {},
    components: {},
    methods: {
      toLoading(){
        this.loading = true;
        this.$router.push({name: 'index', params: {userId: 1}});
        this.loading = false;
      }
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
</style>
