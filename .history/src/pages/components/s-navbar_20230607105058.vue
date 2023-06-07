 <template>
  <view class="nav-box">
    <view :style="{height:state.statusBarHeight+'px'}"></view>
    <view class="navbar cor333 f34" :style="{height:state.navBarHeight+'px'}">
      <view class="back" v-if="state.withBack" @tap="back">
        <!-- <image src="/static/images/back-icon.png"  class="back-icon"></image> -->
      </view>
      <view v-else></view>
      <view class="title">{{ title }}</view>
      <slot name="right"></slot>
    </view>
  </view>
  <view :style="{height: state.statusBarHeight+'px'}" ></view>
</template>

<script setup lang="ts">
import { reactive, ref, defineEmits } from 'vue'

const state = reactive({
  statusBarHeight: 0,
  navBarHeight: 0,
  withBack: false
})

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
})

// 获取手机系统信息
const info = uni.getSystemInfoSync()
// 设置状态栏高度（H5顶部无状态栏小程序有状态栏需要撑起高度）
state.statusBarHeight = info.statusBarHeight || 0
// 除了h5 app mp-alipay的情况下执行
// #ifndef H5 || APP-PLUS || MP-ALIPAY
// 获取胶囊的位置
const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
// (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
state.navBarHeight = (menuButtonInfo.bottom - state.statusBarHeight) + (menuButtonInfo.top - state.statusBarHeight)

const emit = defineEmits(['backPage'])

const back = () =>{
  emit('backPage')
}

console.log(state)

</script>