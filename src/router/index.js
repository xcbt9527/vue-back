import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: resolve => require(['../components/index/index'], resolve),
      children: [
        {path: '/article', component: resolve => require(['../components/article/article.ts'], resolve)},
        {
          path: '/index',
          name: 'index',
          component: resolve => require(['../components/article/article.ts'], resolve)
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/login/login'], resolve),

    }
  ]
})

export default router
