<template>
  <div class="sub-category-detail-item" @click="itemClick">
    <img :src="subCategoryListItem.img" alt="">
  </div>
</template>

<script>
  export default {
    name: "SubCategoryListItem",
    props:{
      subCategoryListItem:{
        type:Object,
        default(){
          return[]
        }
      }
    },
    methods:{
      itemClick(){
        this.$router.push('/detail/' + this. subCategoryListItem.iid);
      }
    }
  }
</script>

<style scoped>
  .sub-category-detail-item{
    padding-bottom: 40px;
    width: 30%;
    position: relative;

  }

  .sub-category-detail-item img{
    width: 100%;
    border-radius: 5px;
  }

</style>
