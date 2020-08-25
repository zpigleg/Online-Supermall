<template>
  <div class="sub-category-item">
    <img :src=""/>
  </div>
</template>

<script>
  export default {
    name: "SubCategoryItem",
    props:{
      subCategoryItem:{
        type:Object,
        default(){
          return[]
        }
      }

    }
  }
</script>

<style scoped>

</style>
