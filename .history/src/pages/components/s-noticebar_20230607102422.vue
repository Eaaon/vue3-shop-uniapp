<template>
  <swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="2000" :duration="2000" :circular="true"
    :vertical="true" :display-multiple-items="3" easing-function="linear">
    <swiper-item v-for="item in list">
      <navigator :url="'/pages/test/test?id=' + item.id">
        <view class="swiper-item">
          {{ item.name }}
        </view>
      </navigator>

    </swiper-item>
  </swiper>
</template>

