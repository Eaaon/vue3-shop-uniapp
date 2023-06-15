import config from '@/config/index';

const request = (options: any) => {
  return new Promise((resolve, reject) => {
    // const token = uni.getStorageSync('token')
    const token = ''
    options.url = options.url || ''; // 请求路径
    options.method = options.method || 'GET'; //请求方式
    options.data = options.data || {}; //请求携带的数据
    let header = { 'Authorization': token }
    uni.request({
      url: `${config.baseUrl}${options.url}`,
      header: header,
      method: options.method,
      data: options.data,
      success(res: any) {
        console.log(res.statusCode)
        resolve(res.data)
      },
      fail(err) {
        uni.hideLoading()
        //请求失败
        uni.showToast({
          title: '无法连接到服务器',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

uni.addInterceptor('request', {
  invoke(args) {
    // uni.showLoading({
    //   title: '加载中...'
    // })
    // request 触发前拼接 url 
    // args.url = 'https://dev.smileteeth.cn/vendingmall/' + args.url
    // const token = uni.getStorageSync('token')
    // args.header = {
    //   'Authorization': token
    // }
    // console.log(args.header)
  },
  success(args) {
    // 请求成功后，修改code值为1
    // args.data.code = 1
    // uni.hideLoading()
    console.log("success", args)
  },
  fail(err) {
    // console.log('interceptor-fail', err)
    // console.log('请求失败')
    console.log("fail", err)
    uni.hideLoading()
  },
  complete(res) {
    // uni.hideLoading()
    // console.log('interceptor-complete', res)
  }
})

export default request