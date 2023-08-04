const tokenKey = 'token';

// 认证令牌
export function getToken() {
  return uni.getStorageSync(tokenKey)
}

export function setToken(token: string) {
  return uni.setStorageSync(tokenKey, token)
}

export function removeToken() {
  return uni.removeStorageSync(tokenKey)
}