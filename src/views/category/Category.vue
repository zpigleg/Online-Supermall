<template>
  <div id="category">
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>


    <scroll class="content" :probe-type="3">
      <div class="categories">
        <category-list class="category" :category-list="category" @categoryClick="showSubCategory"></category-list>
        <sub-category
          class="sub-category"
          :sub-category-list="subCategory"/>
      </div>


      <tab-control
        :titles="['综合','新品','销量']"
        @tabClick="tabClick"
        ref="tabControl"/>

      <sub-category-detail
        class="sub-category-detail"
        :sub-category-detail="subCategoryList"/>
    </scroll>


  </div>
</template>

<script>

import TabControl from "@/components/content/tabControl/TabControl";
import NavBar from "@/components/common/navbar/NavBar"

import {getCategory,getSubCategory, getSubCategoryDetail} from "@/network/category";
import CategoryList from "@/views/category/childComponents/CategoryList";
import SubCategory from "@/views/category/childComponents/SubCategory";
import SubCategoryDetail from "@/views/category/childComponents/SubCategoryDetail";
import Scroll from "../../components/common/scroll/Scroll";

export default {
    name: "Category",
  components: {
    Scroll,
    NavBar,
    SubCategoryDetail,
    SubCategory,
    CategoryList,
    TabControl
  },
  data(){
      return{
        category:[],
        subCategoryList:[],
        subCategory:[],
        currentIndex:'',
        maitKey:'3627',
        miniWallkey:'10062603',
        currentType:'pop'


      }
    },


  created(){
    //请求分类页面的数据
    this.getCategory(),
    this.getSubCategory(this.maitKey),
    this.getSubCategoryDetail(this.miniWallkey,this.currentType)



    //请求左侧分类条目的数据
  },

    mounted(){},

    methods:{
      getCategory(){
        getCategory().then(res =>{
          console.log(res);
          this.category = res.data.category.list;
        })
      },

      getSubCategory(){
        getSubCategory(this.maitKey).then(res => {
          console.log(res);
          console.log("****");
          this.subCategory = res.data.list;
        })
      },

      showSubCategory(index){
        this.maitKey = this.category[index].maitKey;
        getSubCategory(this.maitKey).then(res =>{
          console.log("------");
          console.log(res);
          this.subCategory = res.data.list;
        });
      },

      getSubCategoryDetail(){
        getSubCategoryDetail(this.miniWallkey,this.currentType).then(res =>{
          this.subCategoryList = res;
          console.log(this.subCategoryList);
        })
        },
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
        this.$refs.tabControl.currentIndex = index;
        this.getSubCategoryDetail();
      }
    },
    computed:{
    }

  }
</script>

<style scoped>
  #category{
    height: 100vh;
    position: relative;
  }
  .category-nav{
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .categories{
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: hidden;
  }
  .category{
    position: relative;
    flex-shrink:0;
    width: 30%;
    align-content: stretch;

  }




</style>
