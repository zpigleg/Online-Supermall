<template>
  <div class="login-bar">
    <div class="avatar">
      <img src="@/assets/image/common/avatar.png" alt="">
    </div>
    <div  class="login" @click="itemClick">
      <div class="login-content">
        <span>登录/注册</span>
        <span>
          <img src="@/assets/image/common/phone.png" alt="">
          暂无绑定手机号
        </span>
      </div>
      <div class="login-forward">
        <img src="@/assets/image/common/back.svg" alt="">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginBar",
    methods:{
      itemClick(){
        this.$router.replace("/login");
      }
    }
  }
</script>

<style scoped>
  .login-bar{
    display: flex;
    padding: 15px;
    background-color: var(--color-tint);

  }
  .avatar{
    margin-right:10px;
    border-radius: 50%;
    background-color: #fff;
  }
  .login{
    display: flex;
    margin-top: 7px;
    flex: 1;
  }
  .login-content span{
    width: 200px;
    display: flex;
    color: #fff;
  }
  .login-content img{
    height: 15px;
    margin-right: 5px;
  }
  .login-forward img{
    transform: rotate(180deg);
  }

</style>
