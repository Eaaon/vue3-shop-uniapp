import config from '@/config/index';
import { getToken } from '@/utils/auth';

const request = (options: any) => {
  return new Promise((resolve, reject) => {
    let header = {
      Accept: 'text/json',
      'Content-Type': 'application/json;charset=UTF-8',
      platform: 'WechatMiniProgram',
      'Authorization': `${getToken()}`
    }
    uni.request({
      url: `${config.baseUrl}${options.url}`,
      header: header,
      method: options.method,
      data: options.data,
      success(res: any) {
        resolve(res.data)
      },
      fail(err) {
        uni.showToast({
          title: '无法连接到服务器',
          icon: 'none'
        })
        reject(err)
      },
    })
  })
}

uni.addInterceptor('request', {
  invoke(args) {
    uni.showLoading({
      title: '加载中...'
    })
  },
  success(args) {
    const code = args.statusCode
    if (code == 200) {
      console.log("请求成功")
    } else if (code == 401) {
      console.log("未授权，跳转回登录页")
    } else {
      uni.showToast({
        icon: "none",
        duration: 4000,
        title: args.msg
      });
    }
  },
  fail(err) {
    console.log("fail", err)
  },
  complete(res) {
    uni.hideLoading()
  }
})

export default request