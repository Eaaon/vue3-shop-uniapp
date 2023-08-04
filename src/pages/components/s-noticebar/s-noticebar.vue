<template>
  <view v-if="list && list.length">
    <swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :duration="2000" :circular="true"
      :vertical="true"  easing-function="linear">
      <swiper-item class="swiper-item" v-for="item in list">
        <!-- <navigator :url="'/pages/test/test?id=' + item?.productID"> -->
          <view class="seckill-item">
            <image mode="widthFix" class="seckill-image" :src="item?.url"></image>
            <view class="text-gray-999 text-xs">￥{{ item?.price }}</view>
          </view>
        <!-- </navigator> -->
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type Goods = {
  productID: string;
  url: string;
  price: string;
  originPrice: string;
};

const props = defineProps({
  list: {
    type:  Array as unknown as PropType<[Goods]>,
    default: []
  },
});
</script>

<style lang="scss" scope>
.seckill-item {
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
  height: 130rpx !important;
}

.swiper-item {
  padding: 0 20rpx;
  height: 130rpx !important;
}
</style>