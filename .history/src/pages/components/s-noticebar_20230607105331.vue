<template>
  <view v-if="list && list.length">
    <swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :duration="2000" :circular="true"
      :vertical="true" :display-multiple-items="1" easing-function="linear">
      <swiper-item v-for="item in list" class="swiper-item">
        <navigator :url="'/pages/test/test?id=' + item?.productID">
          <view class="seckill-item">
            <image mode="widthFix" class="seckill-image" :src="item?.url"></image>
            <view class="text-gray-999 text-xs">{{ item?.price }}</view>
          </view>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { compile, ref, reactive, toRefs } from 'vue'
const state = reactive({
  list: [{
    id: 1,
    name: '公告1',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
  },
  {
    id: 2,
    name: '公告2',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
  },
  {
    id: 3,
    name: '公告3',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
  },
  {
    id: 4,
    name: '公告4',
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
  }]
})

const props = defineProps({
  list: {
    type: Array,
    default: []
  },
});
</script>

<style lang="scss" scope>
.seckill-item {
  width: 25% !important;
  text-align: center;
}

.seckill-image {
  width: 60%;
  margin: 0 auto;
}

.swiper-wrapper {
  position: relative;

  .swiper {
    width: 100%;
    height: 100rpx;
  }

}
</style>

<style>
.swiper {
  height: 200rpx !important;
}

.swiper-item {
  padding: 0 20rpx;
  height: 200rpx !important;
}
</style>