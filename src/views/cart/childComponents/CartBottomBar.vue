<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"
                    :is-checked="isSelectAll"
                    @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";

  import {mapGetters} from 'vuex';

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },

    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked;
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
      },

      checkLength() {
        return this.cartList.filter(item => item.checked).length;
      },



      isSelectAll() {

        if (this.cartList.length === 0) return false;
        //1.使用filter
        // return !(this.cartList.filter(item => !item.checked).length)

        //2.使用find
        // return !this.cartList.find(item => !item.checked);

        //3.使用for循环遍历
        for (let item of this.cartList) {
          if (!item.checked) {
            return false;
          }
        }
        return true;
      }
    },
    methods: {
      // checkClick() {
      //   if (this.isSelectAll){
      //     this.cartList.forEach(item => item.checked = false);
      //   } else {
      //     this.cartList.forEach(item => item.checked = true);
      //   }
      // }

      checkClick(){
        if (this.isSelectAll){
          this.cartList.forEach(function (item) {
            return item.checked = false;
          });
        } else{
          this.cartList.forEach(function (item) {
            return item.checked = true;
          })
        }
      },

      calcClick(){
        if (!this.isSelectAll){
          this.$toast.show('请选择购买的商品',1000);
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display: flex;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 80px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 22px;
    margin-right: 5px;
  }
  .price{
    flex: 1;
  }
  .calculate{
    width: 80px;
    font-size: 15px;
    text-align: center;
    background-color: orangered;
    color: #ffffff;
  }
</style>
