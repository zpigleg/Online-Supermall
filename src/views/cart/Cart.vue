<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!--商品列表-->
    <cart-list></cart-list>
    <cart-bottom-bar/>


  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from './childComponents/CartList';
  import CartBottomBar from './childComponents/CartBottomBar';

  import {mapGetters} from 'vuex';

  export default {
    name:"Cart",
    components:{
    NavBar,
    CartList,
    CartBottomBar
  },
    computed:{
      //两种语法
      //数组写法
      //...mapGetters 导入全部getters
      // ...mapGetters(['cartLength','cartList'])
      //对象写法
      ...mapGetters({
        length:'cartLength',
        list:'cartList'
      })
      }
  }
</script>

<style scoped>
 #cart{
    /*position: relative;*/
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  cart-list{
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>
