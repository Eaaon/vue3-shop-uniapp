<template>
  <view>
    <detail-navbar />
    <su-swiper isPreview :list="state.goodsSwiper" dotStyle="tag" imageMode="widthFix" dotCur="bg-mask-40"
      :seizeHeight="750" />
  </view>
</template>

<script setup>
import { reactive, computed } from 'vue';
// import DetailNavbar from './components/detail-navbar.vue';

const state = reactive({
  goodsSwiper: [
    {
      src: 'https://file.sheepjs.com/storage/default/20230207/dc19db05f6f8f8dbac2e334ab6bfd60d.mp4',
      type: 'video',
    }, {
      src: 'http://file.sheepjs.com/storage/test/20220821/8d59f6f7d9676134796b899969049c12.jpg',
      type: 'image',
    }, {
      src: 'http://file.sheepjs.com/storage/test/20220821/9cfc5a53b80f0690cf9705c961fb58e4.jpg',
      type: 'image',
    }, {
      src: 'http://file.sheepjs.com/storage/test/20220821/99d03b432100aa46085f19f52c4953ec.jpg',
      type: 'image',
    }
  ],
})

</script>