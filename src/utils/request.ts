interface params {
  url: string,
  header: object,
  method: string,
  data: object
}

const request = (url: string, method: "GET" | "POST", data: {}) => {
  return new Promise((resolve, reject) => {
    // const token = uni.getStorageSync('token')
    const token = 'eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNosikEKwjAQRe8yMLtSkmKnk-6SNkJAu-sFlBELWoRkURDv7hTdfB7v_TcMpzSlIY3QgzXGWB0LFczzTykuOSsVyaXOz-UhRaTc6-u6vyZ_jhoxEoYWOWBk9Ed0LcYO3QE974kZQ6d32V7QW2Ii1xBxBevl9heNUfH5AgAA__8.YKx8lozy_aBkGyMxuZqrfmkY62chyDhJQ2lngfc3uME'
    uni.request({
      url: 'https://dev.smileteeth.cn/vendingmall/' + url,
      header: { 'Authorization': token },
      method: method,
      data: data,
      success(res: any) {
        // console.log(res)
        // uni.hideLoading()
        if (res.data.code === "000000") {
          resolve(res.data);
        } else {
          //其他异常
          // uni.showToast({
          //   title: res.data.msg,
          //   icon: 'none'
          // })
          reject(res.data);
        }
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
  },
  fail(err) {
    // console.log('interceptor-fail', err)
    // console.log('请求失败')
    uni.hideLoading()
  },
  complete(res) {
    // uni.hideLoading()
    // console.log('interceptor-complete', res)
  }
})

export default request