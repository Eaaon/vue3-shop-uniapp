<template>
  <uni-swiper-dot :info="state.swiperList" :current="state.current" :mode="state.mode" 
    :dots-styles="state.dotsStyles" field="content">
    <swiper class="mt-3 h-300" @change="change" :current="state.swiperDotIndex" circular autoplay>
      <swiper-item v-for="(item, index) in state.swiperList" :key="index" @click=clickItem(item)>
        <view class="ml-3 mr-3">
          <image class="w-full h-300 text-center rounded" :src="item.url"></image>
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</template>