<!--  -->
<template>
  <su-video
    class="s-video-wrap"
    :uid="guid()"
    :src="data.videoUrl"
    :poster="data.src"
    :height="styles.height * 2"
  ></su-video>
</template>

<script setup>
  import { guid } from '@/utils/helper';
  const props = defineProps({
    data: {
      type: Object,
      default() {},
    },
    styles: {
      type: Object,
      default() {},
    },
  });
</script>

<style lang="scss" scoped>
  .s-video-wrap {
    z-index: -100;
  }
</style>
