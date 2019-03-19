<template>
  <div class="contain">
    <iframe
      id="ifr"
      :src=apiUrl
      width="800px"
      height="400px"
      frameborder="0"
      scrolling="no"
    >
    </iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      apiUrl: "https://www.yunlingfly.cn/live2d/demo.html"
    };
  }
};
</script>
<style scoped>
.contain {
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 800px;
}
</style>


