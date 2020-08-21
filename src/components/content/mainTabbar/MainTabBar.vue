<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/image/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="@/assets/image/tabbar/home_active.png"alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <img slot="item-icon" src="@/assets/image/tabbar/category.png"alt="">
      <img slot="item-icon-active" src="@/assets/image/tabbar/category_active.png"alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/image/tabbar/cart.png"alt="">
      <img slot="item-icon-active" src="@/assets/image/tabbar/cart_active.png"alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/login">
      <img slot="item-icon" src="@/assets/image/tabbar/me.png"alt="">
      <img slot="item-icon-active" src="@/assets/image/tabbar/me_active.png"alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar';
  import TabBarItem from '@/components/common/tabbar/TabBarItem';
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
