// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
});

export default axios
Vue.prototype.$axios = axios;

var aa=0;
// http响应拦截器
axios.interceptors.response.use(data => {
    return data
}, error => {
    if (error.response.status === 409 || error.response.status === 412) {
        console.log("出了点问题" + error.response.status)
        sessionStorage.removeItem("token")
        ++aa
        if(aa===1) {
            alert("你的登录信息已过期，请重新登录")
            window.location = '#/login';
        }
    }
    return Promise.reject(error)
})

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  if (!to.meta.needLogin) {
      next()
  } else if (!sessionStorage.getItem('token')) {
      next({
          path: "/login"
      });
  } 
  // else if (to.meta.permission) {
  //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //     role === 'admin' ? next() : next('/403');
  // } 
  else {
      next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
