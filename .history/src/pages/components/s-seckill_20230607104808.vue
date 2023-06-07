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
        <view>{{ item.price }}</view>
      </view>
    </view>
  </uni-card>
</template>

<script setup lang="ts">
import { compile, ref, reactive, toRefs } from 'vue'

const state = reactive({
  seckillList: [{
    id: "001",
    children: [{
      productID: "0110",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0111",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0112",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0113",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }]
  },{
    id: "002",
    children: [{
      productID: "0120",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0121",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0122",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0123",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }]
  },{
    id: "002",
    children: [{
      productID: "0120",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0121",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0122",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0123",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }]
  },{
    id: "002",
    children: [{
      productID: "0120",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0121",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0122",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }, {
      productID: "0123",
      url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
      price: '33.33',
      originPrice: '66.99'
    }]
  }],
  seckillList: [{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
    price: '33.33'
  }, {
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    price: '33.33'
  }, {
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    price: '33.33'
  }, {
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    price: '33.33'
  }]
})
</script>


<style>
.seckill-item {
  width: 25%;
  text-align: center;
}

.seckill-item image {
  width: 60%;
  margin: 0 auto;
}
</style>