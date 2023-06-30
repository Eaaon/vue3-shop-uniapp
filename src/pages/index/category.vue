<template>
  <view>
    <view>
      <button class="ss-reset-button cart-btn" @tap="onAdd">+1</button>
      <button class="ss-reset-button cart-btn" @tap="onDecrement">-1</button>
    </view>
    <view>{{ couter }}</view>
    <s-tabbar :selected="1"></s-tabbar>

  </view>
</template>

<script setup lang="ts">
import { compile, ref, computed } from 'vue'
import { categoryStore } from '@/store/category'

const counterStore = categoryStore()

const couter = computed(() => counterStore.couter);

//去开团
function onAdd() {
  counterStore.increment()
}

function onDecrement(){
  counterStore.decrement()
}

</script>

<style></style>
