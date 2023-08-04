import $platform from '@/shop/platform';
// import $store from '@/shop/store';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);
dayjs.extend(duration);

const shop = {
  // $store,
  $platform
};

// 加载Shopro底层依赖
export async function ShopInit() {
  // 应用初始化
  // await $store('app').init();

  // 平台初始化加载(各平台provider提供不同的加载流程)
  $platform.load();

  if (process.env.NODE_ENV === 'development') {
    ShopDebug();
  }
}

// 开发模式
function ShopDebug() {
  // 开发环境引入vconsole调试
  // #ifdef H5
  // import("vconsole").then(vconsole => {
  // 	new vconsole.default();
  // });
  // #endif

  // 同步前端页面到后端
  // $api.app.pageSync(ROUTES);
}

export default shop;
