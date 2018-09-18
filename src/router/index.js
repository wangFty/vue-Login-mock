import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/home';
 
// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/components/Login'], resolve)
const Home = resolve => require(['@/components/home'], resolve)
 
Vue.use(Router)
 
const router = new Router({
 routes: [
  {
   path: '/',
   component: Login
  },
  {
   path: '/login',
   component: Login
  },
  {
   path: '/home',
   name: 'home',
   component: Home
  }
 ]
})
 
// // 访问之前，检查是否登陆了
// router.beforeEach((to, from, next) => {
//  if(to.path.startsWith('/login')) {
//   window.sessionStorage.removeItem('user');
//   next()
//  }else {
//   let token = window.sessionStorage.getItem('user');
//   if (!token) {
//    next({path: '/login'})
//   }else {
//    next()
//   }
//  }
// });
export default router