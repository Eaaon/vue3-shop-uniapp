import request from "@/utils/request"

export function login(data: any) {
  return request({
    url: '/user/login',
    method: 'POST',
    data: data
  })
}

export function register(data:any){
  return request({
    url: '/user/register',
    method: 'POST',
    data: data
  })
}