<template>
  <view class="flex flex-col justify-center bg-gray-eee">
    <!-- <view class="bg-cover bg-no-repeat sticky z-10 top-0" @tap="open()"
      :style="{ backgroundImage: `url('https://www.bing.com/th?id=OHR.BalloonsTurkey_ZH-CN2791109350_1920x1080.webp&qlt=50')` }">
      <view :style="{ height: state.statusBarHeight + 'px' }"></view>
      <view class="flex items-center text-white ml-3"
        :style="{ height: state.navBarHeight + 'px', 'width': state.navbarLeftWidth + 'px' }">
        <view>
          <image src="../../static/svg/location.svg" class="thumb-40"></image>
        </view>
        <view class="flex-1 pl-sm text-ellipsis">广东省深圳市福田区群星广场A座1801</view>
      </view>
      <uni-search-bar type="text" placeholder="请输入文本" v-model="state.searchValue"></uni-search-bar>
    </view> -->
    <!-- <s-swiper :list="state.bannerList"></s-swiper> -->
    <!-- <s-box></s-box> -->
    <!-- <s-seckill></s-seckill> -->
    <!-- <s-noticebar></s-noticebar> -->
    <!-- <s-waterfull></s-waterfull> -->

    <s-layout
      title="首页"
      navbar="custom"
      :selected="0"
      onShareAppMessage
    >
      <!-- <s-block v-for="(item, index) in template.data" :key="index" :styles="item.style">
        <s-block-item :type="item.type" :data="item.data" :styles="item.style" />
      </s-block> -->
      <!-- 广告模块 -->
      <!-- <s-popup-image /> -->
    </s-layout>

    <!-- <s-tabbar :selected="0"></s-tabbar> -->
  </view>
</template>

<script setup lang="ts">
import { compile, ref, reactive, toRefs } from 'vue'
// import indexBackgroundImage from "@/static/bg.png"
import userApi from "@/api/user"
import goodsApi from "@/api/goods"
import appApi from '@/api/app'

const state = reactive({
  statusBarHeight: 0,
  navBarHeight: 0,
  navbarLeftWidth: 0,
  searchValue: "",
  bannerList: []
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
  state.navbarLeftWidth = info.windowWidth - menuButtonInfo.width - 40
  // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
  state.navBarHeight = (menuButtonInfo.bottom - state.statusBarHeight) + (menuButtonInfo.top - state.statusBarHeight)
} else {
  // 不在微信小程序环境下运行
  state.navbarLeftWidth = info.windowWidth - 40
  state.navBarHeight = 34
  // console.log('当前非微信小程序环境');
}

const param = {
  phone: "11",
  password: "10",
}

appApi.init('222').then((res: any) => {
  // state.bannerList = res.data.list
  console.log('res', res)
})

// goodsApi.banner({}).then((res: any) => {
//   state.bannerList = res.data.list
//   console.log('bannerList', state.bannerList)
// })

// userApi.login(param).then((res: any) => {
//   uni.showToast({
//     title: '登录成功'
//   })
// })

// userApi.register(param).then((res: any) => {
//   uni.showToast({
//     title: '登录成功'
//   })
// })

const open = () => {
  uni.navigateTo({
    url: '/pages/goods/index'
  });
}


</script>

