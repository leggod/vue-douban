module.exports = {
  proxyList: {
        '/v2': {
            // 测试环境
            target: 'https://api.douban.com',  // 接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/v2': ''   //需要rewrite重写的,
            }
        }
  }
}