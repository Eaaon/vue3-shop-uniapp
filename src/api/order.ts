import request from "@/utils/request"

// 订单列表
function list(data = {}){
  return request({
    url: '/order/list',
    method: 'GET',
    data: data
  })
}

// 订单详情
function detail(data = {}){
  return request({
    url: '/order/detail',
    method: 'GET',
    data: data
  })
}

// 取消订单
function cancel(data = {}){
  return request({
    url: '/order/cancel',
    method: 'POST',
    data: data
  })
}

 // 申请退款
function applyRefund(data = {}){
  request({
    url: '/order/apply/refund',
    method: 'POST',
    data: data
  })
}

// 删除订单
function remove(data = {}){
  return request({
    url: '/order/delete',
    method: 'POST',
    data: data
  })
}

const order = {
  list,
  detail,
  cancel,
  remove
}

export default order