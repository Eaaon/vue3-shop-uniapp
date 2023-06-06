<template>
  <view class="box-wrapper flex flex-wrap mt-3">
    <view class="box text-center" v-for="(item, index) in state.list" :key="index" @click=clickItem(item)>
      <view class="mt-2 box-img">
        <image mode="widthFix" :src="item.url"></image>
      </view>
      <view class="mt-2 text-xs">{{item.content}}</view>
    </view>
  </view>
</template>

<script setup lang="ts">

const state = {
  list:[{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
    content: '超市'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    content: '数码电器'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    content: '新百货'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png',
    content: '生鲜'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png',
    content: '到家'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png',
    content: '话费充值'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/34248/39/16616/4689/62bbbdccE9f11132e/d51caf15f2f412b2.png',
    content: '附近好店'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png',
    content: '数码电器'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    content: '新百货'
  },{
    url: 'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    content: '新百货'
  }]
}

const clickItem = (item:any) =>{
  uni.showToast({
    title: item.content,
    duration: 2000
  });
}
</script>

<style lang="scss">
.box-wrapper{
  .box{
    width: 20%;
    .box-img image{
      width: 60%;
      margin: 0 auto;
    }
  }
}
</style>