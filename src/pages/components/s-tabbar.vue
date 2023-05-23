 <template>
  <view class="tab-bar">
    <view v-for="(item,index) in state.list" :key="index" class="tab-bar-item" @click="switchTab(item, index)">
      <image class="tab_img" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
      <view class="tab_text" :style="{color: selected === index ? state.selectedColor : state.color}">{{item.text}}</view>
    </view>
  </view>
</template>
 
 
<script setup lang="ts">
import { reactive, ref } from 'vue'

const state = reactive({
  list: [{
    pagePath: "/pages/index/index",
    selectedIconPath:"../../static/icon/home_on.png",
    iconPath:"../../static/icon/home.png",
    text: "首页"
  },{
    pagePath: "/pages/index/category",
    selectedIconPath:"../../static/icon/category_on.png",
    iconPath:"../../static/icon/category.png",
    text: "分类"
  },{
    pagePath: "/pages/index/cart",
    selectedIconPath:"../../static/icon/cart_on.png",
    iconPath:"../../static/icon/cart.png",
    text: "购物车"
  },{
    pagePath: "/pages/index/user",
    selectedIconPath:"../../static/icon/user_on.png",
    iconPath:"../../static/icon/user.png",
    text: "我的"
  }],
  selectedColor: "#2979ff",
  color: "#8f939c"
})

const props = defineProps({
  selected: {
    type: Number,
    default: 0
  },
});

const switchTab = (item:any,index:number)=>{
  const url = item.pagePath
  uni.switchTab({url})
}

</script>

<style lang="scss">
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100rpx;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部

    .tab-bar-item {
      flex: 1;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .tab_img {
        width: 48rpx;
        height: 48rpx;
      }

      .tab_text {
        font-size: 20rpx;
        margin-top: 9rpx;
      }
    }
  }
</style>