<template>
  <swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :duration="2000" :circular="true"
    :vertical="true" :display-multiple-items="1" easing-function="linear">
    <swiper-item v-for="item in state.list" class="swiper-item">
      <navigator :url="'/pages/test/test?id=' + item.id">
        <view >
          <image :src="item.url"></image>
          {{ item.name }}
        </view>
      </navigator>

    </swiper-item>
  </swiper>
</template>

<script setup lang="ts">
import { compile, ref, reactive, toRefs } from 'vue'
const state = reactive({
  list: [{
    id: 1,
    name: '公告1',
    url:
  },
  {
    id: 2,
    name: '公告2'
  },
  {
    id: 3,
    name: '公告3'
  },
  {
    id: 4,
    name: '公告4'
  },
  {
    id: 5,
    name: '公告5'
  },
  {
    id: 6,
    name: '公告6'
  }
  ]
})
</script>

<style lang="scss" scope>
	.swiper-wrapper {
		position: relative;

		.swiper {
			width: 100%;
			height: 100rpx;
		}


	}
</style>

<style>
    .swiper{
      height: 100rpx !important;
    }
  
		.swiper-item {
			padding: 0 20rpx;
      height: 100rpx !important;
		}
</style>