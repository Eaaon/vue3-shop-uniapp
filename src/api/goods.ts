import request from "@/request"

//商品列表
function banner(data = {}){
  return request({
    url: '/goods/banner',
    method: 'GET',
    data: data
  })
}

//商品列表
function list(data = {}){
  return request({
    url: '/goods/list',
    method: 'GET',
    data: data
  })
}

//商品详情
function detail(data = {}){
  return request({
    url: '/goods/detail',
    method: 'GET',
    data: data
  })
}

//商品评价列表
function comment(data = {}){
  return request({
    url: '/goods/comment',
    method: 'GET',
    data: data
  })
}

//活动商品查询
function activity(data = {}){
  return request({
    url: '/goods/activity',
    method: 'GET',
    data: data
  })
}

function activityList(data = {}){
  return request({
    url: '/goods/activity/list',
    method: 'GET',
    data: data
  })
}

const goodsApi = {
  banner,
  list,
  detail,
  comment,
  activity,
  activityList
}

export default goodsApi