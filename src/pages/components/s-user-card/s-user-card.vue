<template>
  <view class="flex items-center justify-between mt-3">
    <view class="flex items-center ml-3">
      <view class="avatar flex justify-center items-center bg-white">
        <image class="avatar-img" :src="userInfo.avatar"></image>
      </view>
      <view class="ml-3 flex flex-col items-center">
        <view>{{ userInfo.name }}</view>
        <view class="flex items-center text-xs px-1 mt-1 line-height-1 tag">{{ userInfo.vip }}</view>
      </view>
    </view>
    <view class="get-point flex items-center bg-green-gradient">
      <view class="point-img pl-1">
        <image src="/static/icon/my/star.png"></image>
      </view>
      <view class="text-xs tracking-wide px-1">连续签{{ userInfo.day }}天</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
const state = reactive({
  userInfo: {
    avatar: 'https://storage.360buyimg.com/i.imageUpload/3332303337373431352d33303238323431363930393634383630313532_mid.jpg',
    name: 'jd_嗨_尒忒',
    vip: '黄金会员',
    day: 2
  },
});

const { userInfo } = toRefs(state)

</script>

<style lang="scss">
.avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  overflow: hidden;
  padding: 2rpx;
  box-shadow: 0 4px 8px 0 rgba(250, 44, 25, .08);
}

.avatar-img {
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  overflow: hidden;
}

.tag {
  background-color: $golden;
  border-radius: 40rpx;
  height: 40rpx;
  color: $white;
}

.get-point {
  min-width: 160rpx;
  height: 60rpx;
  border-radius: 40rpx 0 0 40rpx;

  .point-img {
    width: 50rpx;
    height: 50rpx;

    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>