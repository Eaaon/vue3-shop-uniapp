<template>
  <view class="bg-contain">
    <s-user-card></s-user-card>
    <s-order-card></s-order-card>
    <s-menu-grid></s-menu-grid>
    <s-tabbar :selected="3"></s-tabbar>
  </view>
</template>

<script setup lang="ts">

</script>

<style>
.bg-contain {
  background: #F6F6F6 url(https://img12.360buyimg.com/img/s750x432_jfs/t1/89090/7/25779/91182/624d07d0E1c8253ed/b876327d65211ca4.png) no-repeat top center / 100% auto;
  position: absolute;
  width: 100%;
  min-height: 100%;
}
</style>
