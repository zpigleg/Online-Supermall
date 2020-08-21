<template>
  <div class="login">
    <div class="login-shift">
      <span id="tel">手机验证码登录</span>
      <span id="account">账号登录</span>
    </div>
    <div class="message-login">

      <div>
        <span>手机号</span>
        <input v-model="tel_number" class="login_text" type="text" placeholder="请输入手机号码">
      </div>
      <div class="send-verify-code-btn">
        <span>发送验证码</span>
      </div>
      <input v-model="verify_code" class="login_text" type="text" placeholder="六位验证码"/>

    </div>
    <div class="account-login" v-show="">
      <div>
        <input  v-model="username" class="login_text" type="text" placeholder="用户名/手机号/E-mail">
      </div>
      <div>
        <input v-model="password" class="login_text" type="text" placeholder="请输入您的密码">
      </div>
      <div class="login_btn">
        <input type="submit" value="登录" @touchstart="handleToLogin">
      </div>
      <div class="login_link">
        <router-link to="" href="#">立即注册</router-link>
        <a href="#">找回密码</a>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "LogIn",
    data(){
      return{
        tel_number:'',
        verify_code:'',
        username:'',
        password:''
      }
    },
    methods:{
      handleToLogin(){
        this.axios.post('',{
          username: this.username,
          password: this.password
        })

      }
    }
  }
</script>

<style scoped>
  .login{

  }
  .login-shift{
    display: inline-block;
    margin-bottom: 5px;
  }
  .login-shift span{
    border: 1px solid #aaa ;
    background-color: rgba(0,0,0,.2);
    border-radius: 2px;
  }



</style>
