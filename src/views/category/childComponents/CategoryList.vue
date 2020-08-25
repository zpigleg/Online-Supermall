<template>
    <div class="category-list">
      <div
        class="category-list-item"
        v-for="(item,index) in categoryList"
        @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
</template>

<script>
  export default {
    name: "CategoryList",
    props:{
      categoryList:{
        type:Array,
        default(){
          return[]
        }
      }
    },

    methods:{
      itemClick(index){
        console.log("CategoryClick");
        this.$emit('categoryClick',index);
      }
    },
    computed:{
    }
  }
</script>

<style scoped>
  category-list{
    display: flex;
    justify-content: space-around;
  }
  .category-list-item{
    width: 100%;
    position: relative;
    background-color: #eee;
    line-height: 53px;
    text-align: center;

  }
</style>
