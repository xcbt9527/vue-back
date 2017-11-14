import Vue from 'vue'
import Router from 'vue-router'
import article from "@/components/article/article.ts";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'article',
      component: article
    },
  ]
})
