<template>
  <view class="flex flex-col justify-center">
    <view class="bg-cover bg-no-repeat" :style="{backgroundImage:`url(${indexBackgroundImage})`}">
      <view :style="{height:state.statusBarHeight+'px'}"></view>
      <view class="flex items-center text-white ml-3" :style="{height:state.navBarHeight+'px', 'width': state.navbarLeftWidth+'px'}">
        <view>
          <image
            src="../../static/svg/location.svg"
            class="thumb-40"
          ></image>
        </view>
        <view class="flex-1 pl-sm text-ellipsis">广东省深圳市福田区群星广场A座1801</view>
      </view>
      <uni-search-bar type="text" placeholder="请输入文本" v-model="state.searchValue"></uni-search-bar>
    </view>
    <s-box></s-box>
    <s-seckill></s-seckill>

    <s-tabbar :selected="0"></s-tabbar>
  </view>
</template>

<script setup lang="ts">
import { compile, ref, reactive, toRefs } from 'vue'
import indexBackgroundImage from "@/static/bg.png"

const title = ref('Hello')

const state = reactive({
  statusBarHeight: 0,
  navBarHeight: 0,
  navbarLeftWidth: 0,
  searchValue: "",
  mode:"round",
  dotsStyles: {
    backgroundColor: 'rgba(83, 200, 249,0.3)',
    border: '1px rgba(83, 200, 249,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
    selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
  },

  boxList:[{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
    content: '超市'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    content: '数码电器'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    content: '新百货'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
    content: '超市'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    content: '数码电器'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    content: '新百货'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
    content: '超市'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    content: '数码电器'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    content: '新百货'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    content: '新百货'
  }],

})

// 获取手机系统信息
const info = uni.getSystemInfoSync()
// 设置状态栏高度（H5顶部无状态栏小程序有状态栏需要撑起高度）
state.statusBarHeight = info.statusBarHeight || 0
if (info.uniPlatform === 'mp-weixin') {
  // 除了h5 app mp-alipay的情况下执行
  // #ifndef H5 || APP-PLUS || MP-ALIPAY
  // 获取胶囊的位置
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect() || ''
  state.navbarLeftWidth =  info.windowWidth - menuButtonInfo.width - 40
  // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
  state.navBarHeight = (menuButtonInfo.bottom - state.statusBarHeight) + (menuButtonInfo.top - state.statusBarHeight)
} else {
  // 不在微信小程序环境下运行
  state.navbarLeftWidth = info.windowWidth - 40
  state.navBarHeight = 34
  console.log('当前非微信小程序环境');
}

const clickItem = (item:any)=>{
  uni.showToast({
    title: item.content,
    duration: 2000
  });
}



</script>

<style>
.seckill-item{
  width: 25%;
  text-align: center;
}
.seckill-item image{
  width: 60%;
  margin: 0 auto;
}
</style>
