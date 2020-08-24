<template>
  <div id="login">
    <div class="login-panel">
      <img src=""/>
      <!--手机号-->
      <login-form class="phone-number"
                  type="number"
                  v-model="phoneNumber"
                  :placeholder="placeholder"
                  :btn-title="btnTitle"
                  :verify-code-btn-active="verifyCodeBtnActive"
                  :error="errors.phoneNumber"
                  @btnClick="getVerifyCode"></login-form>

      <!--验证码-->
      <login-form class="verify-code" type="number" v-model="verifyCode" placeholder="接收验证码" :error="errors.code"></login-form>

      <!--用户服务协议-->
      <div class="login_desc">
        <p>
          新用户登录即自动注册，表示同意
          <span>《用户服务协议》</span>
        </p>
      </div>
      <!--登录按钮-->
      <div class="login_btn">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginForm from '@/components/content/loginform/LoginForm';
  export default {
    name: "LogIn",
    components:{
      LoginForm
    },
    data(){
      return{
        placeholder:"请输入手机号",
        phoneNumber:"",
        verifyCode:"",
        errors:{},
        btnTitle:"验证码",
        verifyCodeBtnActive: false

      }
    },
    methods:{
      getVerifyCode(){
        if (this.validatePhoneNumber()){
          //发送网络请求
          this.validateBtn();
        }
      },
      validatePhoneNumber(){
        if (!this.phoneNumber){
          this.errors ={
            phoneNumber:"手机号码不能为空"
          };
          return false;
        }else if (!/^1[345678]\d{9}$/.test(this.phoneNumber)){
          this.errors = {
            phoneNumber:"请填写正确的手机号码"
          };
          return false;
        }else {
          this.errors = {};
          return true;
        }
      },

      validateBtn(){
        let time = 60;
        let timer = setInterval(() =>{
          if (time == 0){
            clearInterval(timer);
            this.btnTitle = time + "获取验证码";
            this.disabled = false;
          } else {
            //倒计时
            this.btnTitle = time + "秒后重试";
          }
        })
      }
    }
  }
</script>

<style scoped>
  #login{
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }
  .login-panel{
    margin-top: 50%;
    height: auto;
  }
  .phone-number{
    margin-top: 5px;
  }
  .verify-code{
    margin:auto;
    margin-top: 20px;
  }
  .login_desc{
    margin-top:20px;
    margin-bottom: 20px;
    text-align: center;
  }
  .login_desc span{
    display:block;
    margin: auto;
  }
  .login_btn button{
    display: block;
    height: 30px;
    margin:auto;
    width: 80%;
    background-color: #43C333;
    color: #fff;
    border-radius: 3px;
    border: none;
  }





</style>
