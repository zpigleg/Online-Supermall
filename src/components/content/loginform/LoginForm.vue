<template>
  <div class="login-form">
    <!--组件结构-->

    <!--组件容器-->
    <div class="login-input" :class="{'active':error}">
      <!--输入框-->
      <input
             class="input-form"
             :type="type"
             palceholder="placeholder"
             :name="name"
             :value="value"
              @input="handleInput"
      >
      <!--验证码按钮-->
      <button v-if="btnTitle"
              :disabled="verifyCodeBtnActive"
              @click="sendVerifyCode">{{btnTitle}}</button>
    </div>
    <!--错误提醒-->
    <div v-if="error" class="invalid-feedback">{{error}}</div>

  </div>

</template>

<script>
  export default {
    name: "LoginForm",
    props:{
      type:{
        type:String,
        default:"text"
      },
      value:String,
      placeholder:String,
      name:String,
      btnTitle:String,
      verifyCodeBtnActive:Boolean,
      error:String
    },
    methods:{
      handleInput(event){//???????
        this.value = event.target.value;
        this.$emit('input',this.value);
      },
      sendVerifyCode(){
        this.$emit("btnClick");
      }
    }
  }
</script>

<style scoped>
  .login-input{
    width: 100%;

  }
  .login-input input{
    display:inline-block;
    width: 80%;
    height: 30px;
  }
  .login-input button{
    display: inline-block;
    height: 30px;
    border: none;
  }
</style>
