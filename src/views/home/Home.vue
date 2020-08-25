<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control  ref="tabControl1"
                  class="tab-control"
                  :titles = "['流行', '新款', '精选']"
                  @tabClick = "tabClick" v-show="isTabFixed"/>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners = "banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control  ref="tabControl2"
                   :titles = "['流行', '新款', '精选']"
                   @tabClick = "tabClick"/>
      <goods-list :goods="showGoods"></goods-list>
    </Scroll>
    <back-top @click.native = "backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

  import HomeSwiper from './childComponents/HomeSwiper';
  import HomeRecommendView from './childComponents/HomeRecommendView';
  import FeatureView from './childComponents/FeatureView';

  import Scroll from '@/components/common/scroll/Scroll';
  import NavBar from '@/components/common/navbar/NavBar';
  import TabControl from '@/components/content/tabControl/TabControl';
  import GoodsList from  '@/components/content/goods/GoodsList';



  import {getHomeMultiData,getHomeGoods} from "@/network/home";
  import {debounce} from "@/common/utils";
  import {itemListenerMixin,backTopMixin} from "@/common/mixin";







  export default {
    name: "Home",
    components:{
      GoodsList,
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      Scroll
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop': {page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        tabOffsetTop:0,
        saveY:0,
        isTabFixed:false,
      }
    },

    mixins:[itemListenerMixin,backTopMixin],

    created(){
      //1.请求多个数据
      this.getHomeMultiData(),

        //2.请求商品数据
        this.getHomeGoods('pop'),
        this.getHomeGoods('new'),
        this.getHomeGoods('sell')
    },
    mounted(){

    },

    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh();
    },

    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY();

      //取消全局事件的监听
      this.$bus.$off('itemImageLoad',this.itemImageListener);
    },

    computed:{
      showGoods(){
        return this.goods[this.currentType].list;
      }
    },

    methods:{
      /*
      * 事件监听相关方法
      */

      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      contentScroll(position){
        //console.log(position); //console输出当前滚动位置
        //判断BackTop是否显示
        this.isShowBackTop = position.y < -1000;

        //2.决定tabControl是否显示吸顶效果(position:fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
      },
      loadMore(){
        console.log("上拉加载更多");
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad(){

        //获取tabControl的offsetTop
        //所有的组件都有一个属性$el，用于获取组件的元素
        // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        // console.log(this.$refs.tabControl2.$el.offsetTop);
      },


      /*
      网络请求相关方法
       */
      getHomeMultiData(){
        getHomeMultiData().then(res =>{
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {

          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          console.log(res);

          this.$refs.scroll.finishPullUp();
        })
      }

    }

   //函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
    //函数调用结束 -> 弹出函数栈（释放函数所有的变量）
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color:var(--color-tint);
    color:#fff;

    /*在使用浏览器原生滚动时，为了导航不跟随滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/

    /*z-index:9;*/
  }

  .content{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control{
    position: relative;
    z-index: 9;
  }
  /*.content{*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/

</style>
