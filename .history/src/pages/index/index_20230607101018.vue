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

    <s-swiper></s-swiper>
    <s-box></s-box>
    <s-seckill></s-seckill>

    <s-tabbar :selected="0"></s-tabbar>
  </view>
</template>

<script setup lang="ts">
import { compile, ref, reactive, toRefs } from 'vue'
import indexBackgroundImage from "@/static/bg.png"

const state = reactive({
  statusBarHeight: 0,
  navBarHeight: 0,
  navbarLeftWidth: 0,
  searchValue: "",
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

</script>

