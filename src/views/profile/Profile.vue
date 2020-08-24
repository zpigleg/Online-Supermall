<template>
  <div id="profile">
    <nav-bar class="profile-header"><div slot="center">个人中心</div></nav-bar>
    <login-bar class="login-bar"></login-bar>
    <wallet-bar class="wallet-bar"></wallet-bar>

    <div class="menu-panel">
      <div id="my-message" class="my-message">我的消息</div>
      <div id="credit-mall" class="credit-mall">积分商城</div>
      <div id="membership" class="membership">会员卡</div>
      <div id="my-cart" class="my-cart">我的购物车</div>
      <div id="download-app" class="download-app">下载app客户端</div>
    </div>


  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar';
  import LoginBar from '@/views/profile/childComponents/LoginBar';
  import WalletBar from "@/views/profile/childComponents/WalletBar";
  export default {
    name: "Profile",
    components:{
      NavBar,
      LoginBar,
      WalletBar
    },
    methods:{
      //   handleToLogout(){
      //     this.axios.get('api2/users/logout').then((res) =>{
      //       const status = res.data.status;
      //       if (status === 0){
      //         this.$store.commit('user/USER_NAME',{name:''});
      //         this.$router.push('/login');
      //       }
      //     });
      //   }
      // },
      // beforeRouteEnter(to,from,next){
      //   axios.get('api2/users/getUser').then((res) => {
      //     const status = res.data.status;
      //     if (status === 0){
      //       next(vm => {
      //         vm.$store.commit('user/USER_NAME',{ name : res.data.data.username});
      //       });
      //     } else {
      //       next('/login');
      //     }
      //   })
      // }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #profile{
    position: relative;
    height: 100vh;
  }
  .profile-header{
    width: 100%;
    background-color: var(--color-tint);
    color: #fff;
  }
  .menu-panel div{
    display: block;
    border-bottom: 1px solid  #eee;
    line-height:50px;
    position: relative;
    background-color: #fff;
  }
  #my-message{
    border-top: 6px solid #E0E0E0;

  }
  #my-cart{
    border-top: 6px solid #E0E0E0;
  }


</style>
