import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import qs from 'qs';   // qs用于处理post请求失败的问题


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


axios.defaults.baseURL = '';

//javascript的加法,解决浮点数相加不精确
function accAdd(arg1,arg2){ 
  var r1,r2,m; 
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
  m=Math.pow(10,Math.max(r1,r2)) 
  return (arg1*m+arg2*m)/m 
} 
Number.prototype.add = function (arg){ 
  return accAdd(arg,this); 
} 
  
  
//javascript的减法,解决浮点数相加不精确
function accSub(arg1,arg2){ 
    return accAdd(arg1,-arg2); 
} 
Number.prototype.sub = function (arg){ 
    return accSub(this,arg); 
} 


// 请求拦截
axios.interceptors.request.use(
  config => {
    // 如果为post请求则将传输数据json化
    if (config.method == 'post') {
      config.data = qs.stringify(config.data);
    }
    
    // 此处出现加载中动画---暂未写
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    // 此处出现关闭加载中动画---暂未写
    return response;
  },
  error => {
    // 此处出现关闭加载中动画---暂未写
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
