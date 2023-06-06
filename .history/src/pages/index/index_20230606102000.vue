<template>
  <view class="content" >
    <view class="bar-header" :style="{backgroundImage:`url(${indexBackgroundImage})`}">
      <view style="z-index: 2;" :style="{height:state.statusBarHeight+'px'}"></view>
      <view class="flex header" :style="{top:state.statusBarHeight+'px',height:state.navBarHeight+'px', 'line-height':state.navBarHeight+'px', 'width': state.navbarLeftWidth+'px'}" v-if="state.navBarHeight">
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

      <uni-search-bar type="text" placeholder="请输入文本" v-model="state.searchValue"></uni-search-bar>
    </view>
    
    <!-- <view class="uni-margin-wrap">
      <uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :current="state.current" :mode="state.mode"
			:dots-styles="state.dotsStyles" field="content">
        <swiper class="swiper-box" :current="state.swiperDotIndex">
          <swiper-item>
            <image class="swiper-item" src="../static/banner_001.png"></image>
          </swiper-item>
          <swiper-item>
            <image class="swiper-item" src="../static/banner_002.png"></image>
          </swiper-item>
          <swiper-item>
            <image class="swiper-item" src="../static/banner_002.png"></image>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
		</view> -->

    <uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="state.info" :current="state.current" :mode="state.mode" 
			:dots-styles="state.dotsStyles" field="content">
			<swiper class="swiper-box" @change="change" :current="state.swiperDotIndex" circular="true">
				<swiper-item v-for="(item, index) in state.info" :key="index">
					<!-- <view class="swiper-item" :class="'swiper-item' + index">
						<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
					</view> -->
          <image class="swiper-item" :src="item.url"></image>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		
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
  indicatorDots: true,
  autoplay: false,
  interval: 2000,
  duration: 500,
  searchValue: "",
  current: 0,
  mode:"round",
  dotsStyles: {
    backgroundColor: 'rgba(83, 200, 249,0.3)',
    border: '1px rgba(83, 200, 249,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
    selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
  },
  swiperDotIndex: 0,
  info:[{
      colorClass: 'uni-bg-red',
      url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 A'
    },
    {
      colorClass: 'uni-bg-green',
      url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 B'
    },
    {
      colorClass: 'uni-bg-blue',
      url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
      content: '内容 C'
    }
  ],
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
  console.log('当前非微信小程序环境');
}

const clickItem = ()=>{

}

const change = (e:any) =>{
  state.current = e.detail.current
}

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bar-header{
  background-size: 100% 100%;
  background-position : no-repeat;
}

.flex{
  display: flex;
  align-items: center;
}

.header{
  color: #fff;
  text-align: left;
  padding-left: 20rpx;
  /* position: fixed; */
  z-index: 2;
}

.location-img{
  width: 40rpx;
  height: 40rpx;
  display: block;
}

.address{
  text-overflow :ellipsis; /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
  white-space :nowrap; /*让文字不换行*/
  overflow : hidden; /*超出要隐藏*/
  flex: 1;
  padding-left: 4rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}
.swiper-box {
  height: 420rpx;
}
.swiper-item {
  display: block;
  height: 420rpx;
  width: 750rpx;
  text-align: center;
}
</style>
