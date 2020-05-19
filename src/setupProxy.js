const proxy =require('http-proxy-middleware')


module.exports = function(app) {
  // app.use(proxy('/bai', { 
  //   target: 'http://top.baidu.com', 
  //   changeOrigin:true,
  //   pathRewrite: {
  //     '^/bai': ''
  //    }
  // }))
}
