<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="@/assets/image/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check{
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
  }

</style>
