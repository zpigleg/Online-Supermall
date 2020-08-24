<template>
  <div class="wallet">
    <div class="money">
      <div class="remainder">{{remainder}}</div>
      元<br/>我的余额
    </div>
    <div class="coupon">
      <div class="coupon-count">{{couponCount}}</div>
      个<br/>我的优惠
    </div>
    <div class="credit">
      <div class="credit-score">{{credit}}</div>
      分<br/>我的积分
    </div>
  </div>
</template>

<script>
  export default {
    name: "WalletBar",
    data(){
      return{
        remainder:0,
        couponCount:0,
        credit:0
      }

    },
    props:{
      // remainder:0,
      // couponCount:0,
      // credit:0

    }
  }
</script>

<style scoped>
  .wallet{
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    color: #87939A;
  }
  .money,.coupon,.credit{
    border-right: 1px solid #eee;
    text-align: center;
  }
  .remainder,.coupon-count,.credit-score{
    font-weight:800;
    color:#FF6F42;
    display: inline-block;
  }

</style>
