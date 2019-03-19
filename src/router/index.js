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
      path: '/demo',
      component: resolve => require(['../components/page/Demo.vue'], resolve),
      meta: {
        title: 'demo',
        needLogin: false
      }
    },
    {
      path: '/live2d',
      component: resolve => require(['../components/page/Live2D.vue'], resolve),
      meta: {
        title: 'live2d',
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
