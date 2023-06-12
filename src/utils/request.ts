interface params {
  url: string,
  header: object,
  method: string,
  data: object
}

const request = (url: string, method: "GET" | "POST", data: {} ) => {
  return new Promise((resolve, reject) => {
    const token = uni.getStorageSync('token')
    uni.request({
      url: 'https://dev.smileteeth.cn/vendingmall/' + url,
      header: { 'Authorization': token },
      method: method,
      data: data,
      success(res: any) {
        console.log(res)
        // uni.hideLoading()
        if (res.data.code === "200" || res.data.ok) {
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

const interceptor = () => {
  uni.addInterceptor('request', {
    invoke(args) {
      // request 触发前拼接 url 
      args.url = 'https://www.example.com/'+args.url
    },
    success(args) {
      // 请求成功后，修改code值为1
      args.data.code = 1
    }, 
    fail(err) {
      console.log('interceptor-fail',err)
    }, 
    complete(res) {
      console.log('interceptor-complete',res)
    }
  })
}

export default {
  request,
  interceptor
}