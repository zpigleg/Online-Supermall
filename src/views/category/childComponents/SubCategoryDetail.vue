<template>
  <div class="sub-category-detail">
    <sub-category-list-item
      v-for="item in subCategoryDetail"
      :sub-category-list-item="item"/>
  </div>
</template>

<script>
  import SubCategoryListItem from "./SubCategoryDetailItem";
  export default {
    name: "SubCategoryDetail",
    components: {SubCategoryListItem},
    props:{
      subCategoryDetail:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>
.sub-category-detail{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
