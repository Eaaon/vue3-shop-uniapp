<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  uni.hideTabBar();
  // console.log("App Launch");
});
onShow(() => {
  // console.log("App Show");
});
onHide(() => {
  // console.log("App Hide");
});
</script>
<style lang="scss">
@import './scss/index.scss';

page {
	background-color: #f7f7f7;
}
</style>
