<template>
    <div class="sub-category-list">
      <div class="sub-category-list-item" v-for="(item,index) in subCategoryList" @click="itemClick(index)" >
        <img :src="item.image" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    name: "SubCategory",
    props:{
      subCategoryList:{
        type:Array,
        default(){
          return[]
        }
      }
    },

    methods:{
      itemClick(index){
        this.$emit('subCategoryClick',index);
      }
    }
  }
</script>

<style scoped>
  .sub-category-list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .sub-category-list-item{
    position: relative;
    padding-bottom:40px;
    width: 25%;

  }
  .sub-category-list-item img{
    width: 100%;
  }

</style>
