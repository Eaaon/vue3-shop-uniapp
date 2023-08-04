import request from "@/request"
import config from '@/config/index';
import { getToken } from '@/utils/auth'

//初始化
function init(templateId: string) {
  return request({
    url: '/shop/api/init',
    method: 'GET',
    params: {
      templateId: templateId
    }
  })
}

//上传
function upload(file: any, group = 'ugc') {
  const token = getToken();
  uni.showLoading({
    title: '上传中',
  });
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: config.uploadUrl + '/file/api/upload',
      filePath: file,
      name: 'file',
      formData: {
        group,
      },
      header: {
        Accept: 'text/json',
        Authorization: token,
      },
      success: (uploadFileRes) => {
        let result = JSON.parse(uploadFileRes.data);
        if (result.error === 1) {
          uni.showToast({
            icon: 'none',
            title: result.msg,
          });
        } else {
          return resolve(result.data);
        }
      },
      fail: (error) => {
        console.log('上传失败：', error);
        return resolve(false);
      },
      complete: () => {
        uni.hideLoading();
      },
    });
  });
}

const appApi = {
  init,
  upload
}

export default appApi