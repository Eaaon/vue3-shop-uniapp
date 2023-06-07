<template>
  <uni-swiper-dot :info="state.swiperList" :current="state.current" :mode="state.mode" :dots-styles="state.dotsStyles"
    field="content">
    <swiper class="mt-3 h-300" @change="change" :current="state.swiperDotIndex" circular autoplay>
      <swiper-item v-for="(item, index) in state.swiperList" :key="index" @click=clickItem(item)>
        <view class="ml-3 mr-3">
          <image class="w-full h-300 text-center rounded" :src="item.url"></image>
        </view>
      </swiper-item>
    </swiper>
  </uni-swiper-dot>
</template>

<script setup lang="ts">
import { compile, ref, reactive, toRefs } from 'vue'

const state = reactive({
  current: 0,
  swiperDotIndex: 0,
  mode:"round",
  dotsStyles: {
    backgroundColor: 'rgba(83, 200, 249,0.3)',
    border: '1px rgba(83, 200, 249,0.3) solid',
    color: '#fff',
    selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
    selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
  },
  swiperList: [{
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
})

const change = (e: any) => {
  state.current = e.detail.current
}
</script>