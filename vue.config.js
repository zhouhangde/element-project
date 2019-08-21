const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: '/wxzf/dist/', // 打包文件相对路径
  publicPath:'./',    // 公共路径
  outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
  lintOnSave:false,  // 关闭eslint
  productionSourceMap:true,  // 生产环境下css 分离文件
  devServer: {
    open: true,
    host: '0.0.0.0',  //注意当变成localhost的时候，不知什么原因ifram的k线图不能正常显示样式
    port: '8084',
    https: false,
    hotOnly: false,
    proxy: {    
      // 配置跨域（代理）
      '/api': {
        // target: 'http//localhost:8083/api/',    //目标地址
        // target: 'http://btbfire.com/api',    //目标地址
        target: 'http://91bilong.com/api',    //目标地址
        ws: true,   //是否允许跨域
        changOrigin: true,   //是否改变原域
        pathRewrite: {   //路径重写
          '^/api': ''
        }
      }
    },
    before: app => {   //before为在服务内部所有中间件执行之前
      // http://localhost:8081/api/goods
      // app.get('/api/batchShopjson', (req, res) => {
      //   res.json(batchShopjson);    //返回对应的json，假数据
      // });
    }
  },
  // 以下webpack打包提示资源(asset)和入口起点超过指定文件限制
  //webpack配置
	configureWebpack: {
    //或者
    //警告 webpack 的性能提示
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
    resolve:{   // 配置解析别名
      alias:{
          '@':path.resolve(__dirname, './src'),
          '@h':path.resolve(__dirname, './src/assets/hotcss'),
          '@s':path.resolve(__dirname, './src/assets/style'),
          '@i':path.resolve(__dirname, './src/assets/images'),
      } 
    }
  },
  // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: (config)=>{
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('style', resolve('src/assets/style'))
   }

  
};
