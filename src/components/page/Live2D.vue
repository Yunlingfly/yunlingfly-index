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
      apiUrl: "http://127.0.0.1:8080/live2d/demo.html"
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


