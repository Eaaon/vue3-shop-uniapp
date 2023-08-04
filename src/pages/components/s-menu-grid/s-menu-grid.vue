<template>
  <view class="flex bg-white overflow-hidden rounded-md mx-3 mt-2">
    <uni-grid :column="column" :showBorder="false">
      <uni-grid-item class="pt-2" v-for="(item, index) in list" :index="index" :key="index">
        <view class="flex flex-col justify-center items-center flex-1">
          <uni-badge class="uni-badge-left-margin" :text="item.value" absolute="rightTop" size="small">
            <image class="item-icon" :src="item.icon" mode="aspectFit"></image>
          </uni-badge>
          <view class="pt-2 text-xs">{{ item.title }}</view>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
const state = reactive({
  list: [{
    title: '客户服务',
    value: '',
    icon: '/static/icon/my/chat.png',
    path: '/pages/order/list',
    type: 'unpaid',
  },
  {
    title: '积分',
    value: '',
    icon: '/static/icon/my/point.png',
    path: '/pages/order/list',
    type: 'noget',
  },
  {
    title: '收货地址',
    value: '',
    icon: '/static/icon/my/location.png',
    path: '/pages/order/list',
    type: 'nocomment',
  },
  {
    title: '发票报销',
    value: '',
    icon: '/static/icon/my/invoice.png',
    path: '/pages/order/aftersale/list',
    type: 'aftersale',
  },
  {
    title: '常见问题',
    value: '',
    icon: '/static/icon/my/help.png',
    path: '/pages/order/list',
  },
  {
    title: '我的收藏',
    value: '',
    icon: '/static/icon/my/collect.png',
    path: '/pages/order/list',
    type: 'nocomment',
  },
  {
    title: '进群领券',
    value: '',
    icon: '/static/icon/my/add_user.png',
    path: '/pages/order/aftersale/list',
    type: 'aftersale',
  },
  {
    title: '意见反馈',
    value: '',
    icon: '/static/icon/my/feedback.png',
    path: '/pages/order/list',
  }
  ],
  column: 5
});

const { list, column } = toRefs(state)

</script>

<style lang="scss">
.menu-title {
  font-size: 24rpx;
  line-height: 24rpx;
  color: #333333;
}

.item-icon {
  width: 52rpx;
  height: 52rpx;
}
</style>