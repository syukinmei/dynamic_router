<template>
  <div class="box">
    <h1>about</h1>
    <div class="mediate">我要居中</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  height: 100%;
  position: relative;
}
.mediate {
  width: 200px;
  height: 200px;
  background: red;
  margin: 0 auto;

  /* 垂直居中 */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  /* 文字垂直居中 */
  line-height: 200px;
}
</style>