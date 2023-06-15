import request from "@/utils/request"

//用户注册
function register(data = {}){
  return request({
    url: '/user/register',
    method: 'POST',
    data: data
  })
}

//用户登录
function login(data: any) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: data
  })
}

//退出登录
function logout(data: any) {
  return request({
    url: '/user/logout',
    method: 'POST',
    data: data
  })
}

//账号注销
function logoff(data: any) {
  return request({
    url: '/user/logoff',
    method: 'POST',
    data: data
  })
}

//用户信息
function profile(data = {}){
  return request({
    url: '/user/profile',
    method: 'GET',
    data: data
  })
}

//用户信息更新
function update(data = {}){
  return request({
    url: '/user/update',
    method: 'POST',
    data: data
  })
}

 // 短信登录
function smsLogin(data = {}){
  return request({
   url: '/user/sms/login',
   method: 'POST',
   data,
 })
}

// 短信注册
function smsRegister(data = {}){
  return request({
   url: '/user/sms/register',
   method: 'POST',
   data,
 })
}

// 重置密码
function resetPassword(data = {}){
  return request({
   url: '/user/reset/password',
   method: 'POST',
   data,
 })
}

// 修改密码
function changePassword(data = {}){
  return request({
   url: '/user/change/password',
   method: 'POST',
   data,
 })
}

// 绑定、更换手机号
function changeMobile(data = {}){
  return request({
   url: '/user/change/mobile',
   method: 'POST',
   data,
 })
}

// 修改用户名
function changeUsername(data = {}){
  return request({
   url: '/user/change/user/name',
   method: 'POST',
   data,
 })
}

const user = {
  register,
  login,
  logout,
  logoff,
  profile,
  update,
  smsLogin,
  smsRegister,
  resetPassword,
  changePassword
}

export default user