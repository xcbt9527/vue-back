<template>
  <Col span="5" class="layout-menu-left">
  <Menu active-name="1-2" width="auto" :open-names="['1']" @on-select="menuclick">
    <div class="layout-logo-left"></div>
    <div v-for="item in menu">
      <Submenu :name="item.name">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          {{item.title}}
        </template>
        <span v-for="subitem in item.sub">
          <MenuItem :name="subitem.link">
            {{subitem.title}}
          </MenuItem>
        </span>
      </Submenu>
    </div>
  </Menu>
  </Col>
</template>

<script>
  import router from "../../router/menu";
  export default {
    name: 'app',
    router,
    data () {
      return {
        menu: [{
          name: '1',
          title: '首页',
          sub: [{
            name: '1-1',
            link: 'article',
            title: '文章列表'
          }, {
            name: '1-2',
            link: 'article',
            title: '文章'
          },]
        },
          {
            name: '2',
            title: '用户',
            sub: [{
              name: '2-1',
              link: 'article',
              title: '用户列表'
            }]
          },
          {
            name: '3',
            title: '开发者工具',
            sub: [{
              name: '3-1',
              link: 'article',
              title: '代码生成'
            }]
          },
          {
            name: '4',
            title: '系统配置',
            sub: [{
              name: '4-1',
              link: 'article',
              title: '全局系统配置'
            }]
          }]
      }
    },
    prop: {},
    methods: {
      menuclick(route){
        console.log(route);
        this.$router.push({path: route})
//        router.go({name: route});
      }
    },
  }
</script>

<style>

</style>
