<template>
  <view class="flex flex-col justify-center">
    <view class="bg-cover bg-no-repeat" :style="{backgroundImage:`url(${indexBackgroundImage})`}">
      <view :style="{height:state.statusBarHeight+'px'}"></view>
      <view class="flex items-center text-white ml-3" :style="{height:state.navBarHeight+'px', 'width': state.navbarLeftWidth+'px'}">
        <view>
          <image
            src="../../static/svg/location.svg"
            class="address-img"
            style="color:#f00"
          ></image>
        </view>
        <view class="address-text">广东省深圳市福田区群星广场A座1801</view>
      </view>
      <uni-search-bar type="text" placeholder="请输入文本" v-model="state.searchValue"></uni-search-bar>
    </view>

    <uni-swiper-dot class="uni-swiper-dot-box"  :info="state.swiperList" :current="state.current" :mode="state.mode" 
      :dots-styles="state.dotsStyles" field="content">
      <swiper class="swiper-box" @change="change" :current="state.swiperDotIndex" circular autoplay>
        <swiper-item v-for="(item, index) in state.swiperList" :key="index" @click=clickItem(item)>
          <view style="margin:0 20rpx;">
            <image class="swiper-item" :src="item.url"></image>
          </view>
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
  swiperList:[{
      colorClass: 'uni-bg-red',
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/203328/7/34468/36963/646b2882Ff6080121/4276e9336352e93d.jpg!cr_1053x420_4_0!q70.jpg',
      content: '内容 A'
    },
    {
      colorClass: 'uni-bg-green',
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/110526/4/34091/95155/644d07f4F2aa9abf7/f9d26fdc98041d9d.jpg!cr_1053x420_4_0!q70.jpg',
      content: '内容 B'
    },
    {
      colorClass: 'uni-bg-blue',
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/110186/37/35544/127997/6465c302F2af1852c/21a7e18348df1ede.jpg!cr_1053x420_4_0!q70.jpg',
      content: '内容 C'
    }
  ],
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
  }]
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

const change = (e:any) =>{
  state.current = e.detail.current
}

</script>

<style>

.address-img{
  width: 40rpx;
  height: 40rpx;
}

.address-text{
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

.swiper-box {
  margin-top: 20rpx;
  height: 300rpx;
}
.swiper-item {
  display: block;
  width: 100%;
  height: 300rpx;
  text-align: center;
  border-radius: 12rpx;
}
</style>
