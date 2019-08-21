import axios from 'axios'
import qs from 'qs';

const instance = axios.create({
  baseURL:"",
  timeout: 3000 // 请求超时
})


// 请求拦截器, 进行一个全局loading  加载，这种情况下所有的接口请求前 都会加载一个loadin
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么（... 这里写你的展示loading的逻辑代码 ）
    isShowLoading(true);
    // 获取token，配置请求头
    const TOKEN = localStorage.getItem('Token')
    // 演示的token（注意配置请求头，需要后端做cros跨域处理，我这里自己前端配的跨域）
    if (config.method == 'post') {
      config.data = qs.stringify(config.data);
    }
    if(TOKEN){
      // 配置请求头 token
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.headers['Authorization'] = TOKEN;
   }
    return config;
  },
  error => {
    Toast({
      message: '服务器异常',
      position: "bottom",
      duration: 2000
    });
    return Promise.reject(error);
  }
);

/**
 * 添加响应拦截器，意思就是发起接口请求之后做什么事，此时只有两种情况，
 * */
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    isShowLoading(false);
    // 根据后端定义请求过期后返回的参数，处理token过期问题
    const {status} = response.data;
    // 判断状态码401或者其它条件，对应后台
    if(Object.is(status,401)){
      // token过期后处理
      // 1.删除你本地存储的那个过期的token
      // 2. 跳转到登陆页（因为没有装路由，不写了，重新登陆赋值）
      //  todo...
    }
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    isShowLoading(false);
    return Promise.reject(error);
  }
);

/**
 * 是否开启loading
 */
function isShowLoading(payload) {
    if(payload){
      // 加载动画--暂未写
    }else{
      //关闭动画--暂未写
    }
}

/**
 * 使用es6中的类，进行简单封装
 */
class http {
  //async使其返回为promise
  //await表示同步等待
  static async get(url, params) {
    return await instance.get(url, {params}) 
  }
  static async post(url, params) {
    return await instance.post(url, params);  
  }
}


export default http;