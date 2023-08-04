<template>
  <view :style="{ height: statusBarHeight }" class="uni-status-bar"><slot /></view>
</template>

<script setup>
  import shop from '@/pages/shop';
  import { computed } from 'vue';

  const statusBarHeight = shop.$platform.device.statusBarHeight + 'px';
</script>
<style lang="scss">
  .uni-status-bar {
    // width: 750rpx;
    height: var(--status-bar-height);
  }
</style>
