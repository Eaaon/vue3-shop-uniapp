<template>
  <view class="content">
    <view style="z-index: 2;" :style="{height:state.statusBarHeight+'px'}"></view>
    <view class="flex header" :style="{height:state.navBarHeight+'px', 'line-height':state.navBarHeight+'px'}" v-if="state.navBarHeight">
      <view>
        <image
          src="../../static/svg/location.svg"
          class="location-img"
          style="color:#f00"
        ></image>
      </view>
      <view class="address">广东省深圳市福田区群星广场A座1801</view>
    </view>
    <view v-else>222</view>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <s-tabbar :selected="0"></s-tabbar>
  </view>
</template>

<script setup lang="ts">
import { compile, ref, reactive } from 'vue'


const title = ref('Hello')

const state = reactive({
  statusBarHeight: 0,
  navBarHeight: 0,
  menuButtonWidth: 0
})

// 获取手机系统信息
const info = uni.getSystemInfoSync()
// 设置状态栏高度（H5顶部无状态栏小程序有状态栏需要撑起高度）
state.statusBarHeight = info.statusBarHeight || 0
let platform = uni.getSystemInfoSync().uniPlatform
if (platform === 'mp-weixin') {
  // 除了h5 app mp-alipay的情况下执行
  // #ifndef H5 || APP-PLUS || MP-ALIPAY
  // 获取胶囊的位置
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect() || ''
  const menuButtonWidth = menuButtonInfo.width
  console.log(menuButtonInfo)
  // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
  state.navBarHeight = (menuButtonInfo.bottom - state.statusBarHeight) + (menuButtonInfo.top - state.statusBarHeight)
  uni.showToast({
    title: state.navBarHeight + '',
    duration: 20000
  })
} else {
  // 不在微信小程序环境下运行
  console.log('当前非微信小程序环境');
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f00;
}

.flex{
  display: flex;
  align-items: center;
}

.header{
  color: #fff;
}

.location-img{
  width: 40rpx;
  height: 40rpx;
}

.address{

}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
