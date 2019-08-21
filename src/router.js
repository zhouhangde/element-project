import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'hash',  //打包設置，必須為hash，否则页面为空白（其他值：history）
  base: process.env.BASE_URL,    //api请求的前缀地址
  linkActiveClass: 'active',   //此为表示为当前路由时，显示active样式，会动态添加的样式
  routes: [
    {
      path: '/',
      // name: 'index',
      component: () => import('./views/index.vue'),
      children: [
        {
          path: '',
          redirect: '/home'   //表示默认首页跳转的地址，重定向到/home
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')    //此为按需引入的方式
        }
      ]
    },
    // 测试的demo页面
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/demo/demo.vue')
    }
  ]
});
// 全局路由守卫（注意当有此方法时会默认进入此方法，不会进入下一步，不用时应该注释）
router.beforeEach((to, from, next) => {
   // 判断当前是否登录
  const isLogin = localStorage.access_token ? true : false;
  next();
  // if (to.path == '/phoneLogin') {
  //   next();
  // }else {
  //   // 是否在登录状态下
  //   isLogin ? next() : next('/phoneLogin');
  // }
});

export default router;
