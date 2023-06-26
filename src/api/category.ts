import request from "@/request"

//分类列表
function list(data = {}){
  return request({
    url: '/category/list',
    method: 'GET',
    data: data
  })
}

const category = {
  list
}

export default category