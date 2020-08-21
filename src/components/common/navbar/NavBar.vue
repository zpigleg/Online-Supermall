<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px; /*单独设置line-height可以把空间撑起来*/
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .center{
    flex: 1;
  }
  .right,.left{
    width: 18px;
  }

</style>
