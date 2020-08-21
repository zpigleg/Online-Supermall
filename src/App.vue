<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive> <!-- 组件顺序和视图层级有关系，最后的顺序会在最上层 -->
    <main-tab-bar/>



  </div>

</template>

<script>

  import MainTabBar from '@/components/content/mainTabbar/MainTabBar';
  import Home from '@/views/home/Home';

export default {
  name: 'App',
  components: {
    MainTabBar,
    Home
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
