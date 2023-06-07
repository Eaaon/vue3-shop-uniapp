<template>
  <uni-card>
    <template v-slot:title>
      <view class="flex pt-4 pl-2">
        <view>限时秒杀：</view>
        <uni-countdown :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF" />
      </view>
    </template>
    <view class="seckill-list flex flex-wrap">
      <view class="seckill-item flex-1" v-for="(item, index) in state.seckillList" :key="index">
        <image mode="widthFix" :src="item.url"></image>
        <view>{{item.price}}</view>
      </view>
    </view>
  </uni-card>
</template>