// 开发环境配置
let baseUrl;
let version;
let uploadUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://easydoc.net/mock/hJxtUayA';
  uploadUrl = 'https://api.shopro.sheepjs.com'
} else {
  baseUrl = import.meta.env.BASE_URL;
}
version = import.meta.env.VERSION;
export const apiPath = import.meta.env.API_PATH;

export const staticUrl = import.meta.env.STATIC_URL;

const config = {
  baseUrl,
  uploadUrl,
  apiPath,
  staticUrl,
  version
}

export default config
