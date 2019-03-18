import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: resolve => require(['../components/page/Index.vue'], resolve),
      meta: {
        title: '主页',
        needLogin: false
      }
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Index.vue'], resolve),
      meta: {
        title: '主页',
        needLogin: false
      }
    }
  ]
})
