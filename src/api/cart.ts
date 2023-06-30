import request from "@/request"

//购物车列表
function list(data = {}){
  return request({
    url: '/cart/list',
    method: 'GET',
    data: data
  })
}

//添加到购物车
function append(data = {}){
  return request({
    url: '/cart/append',
    method: 'POST',
    data: data
  })
}

//删除购物车
function remove(data = {}){
  return request({
    url: '/cart/delete',
    method: 'POST',
    data: data
  })
}

function update(data = {}){
  return request({
    url: '/cart/update',
    method: 'POST',
    data: data
  })
}

const cartApi = {
  list,
  append,
  remove,
  update,
}

export default cartApi