<template>
  <view class="flex bg-white overflow-hidden rounded-md mx-3 mt-4">
    <view class="menu-item flex flex-col justify-center items-center flex-1" v-for="item in orderMap" :key="item.title">
      <uni-badge :text="item.value" absolute="rightTop" size="small" custom-style="background-color: #ff623e;">
        <image class="item-icon" :src="item.icon" mode="aspectFit"></image>
      </uni-badge>
      <view class="pt-2 text-xs">{{ item.title }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
const state = reactive({
  orderMap: [{
    title: '待付款',
    value: '1',
    icon: '/static/icon/my/wait_pay.png',
    path: '/pages/order/list',
    type: 'unpaid',
  },
  {
    title: '待收货',
    value: '3',
    icon: '/static/icon/my/wait_receipt.png',
    path: '/pages/order/list',
    type: 'noget',
  },
  {
    title: '待评价',
    value: '4',
    icon: '/static/icon/my/wait_comment.png',
    path: '/pages/order/list',
    type: 'nocomment',
  },
  {
    title: '退换／售后',
    value: '',
    icon: '/static/icon/my/order_entrance.png',
    path: '/pages/order/aftersale/list',
    type: 'aftersale',
  },
  {
    title: '全部订单',
    value: '',
    icon: '/static/icon/my/all_order.png',
    path: '/pages/order/list',
  },
  ]
});

const { orderMap } = toRefs(state)

</script>

<style lang="scss">
.menu-item {
  height: 160rpx;
  position: relative;
  z-index: 10;

  .menu-title {
    font-size: 24rpx;
    line-height: 24rpx;
    color: #333333;
  }

  .item-icon {
    width: 52rpx;
    height: 52rpx;
  }
}
</style>