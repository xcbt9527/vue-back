import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:  resolve => require(['../components/index/index.vue'], resolve),
      children: [
        {path: '/article', component: resolve => require(['../components/article/article.ts'], resolve)}
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../components/index/index.vue'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/login.vue'], resolve),

    }
  ]
})

export default router;
