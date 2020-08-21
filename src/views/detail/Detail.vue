<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" class="detail-nav" ref="detailNav"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods= "recommends"/>
    </scroll>

    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>


    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <!--<toast :message="message" :show="show"></toast>-->
  </div>
</template>

<script>
  import DetailNavBar from '@/views/detail/childcomponents/DetailNavBar';
  import DetailSwiper from '@/views/detail/childcomponents/DetailSwiper';
  import DetailBaseInfo from '@/views/detail/childcomponents/DetailBaseInfo';
  import DetailShopInfo from '@/views/detail/childcomponents/DetailShopInfo';
  import DetailGoodsInfo from '@/views/detail/childcomponents/DetailGoodsInfo';
  import DetailParamInfo from '@/views/detail/childcomponents/DetailParamInfo';
  import DetailCommentInfo from '@/views/detail/childcomponents/DetailCommentInfo';
  import DetailBottomBar from '@/views/detail/childcomponents/DetailBottomBar';
  import GoodsList from '@/components/content/goods/GoodsList';

  import Scroll from '@/components/common/scroll/Scroll'
  // import Toast from '@/components/common/toast/Toast';

  import {getDetail,Goods,GoodsParam,Shop,getRecommend} from "@/network/detail";
  import {debounce} from "@/common/utils";
  import {itemListenerMixin,backTopMixin} from "@/common/mixin";
  import {BACK_POSITION} from "@/common/const";

  import { mapActions } from 'vuex';


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      // Toast,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopY: [],
        getThemeTopY: null,
        currentIndex: 0,
        // message:'',
        // show:false
      }
    },
    mixins: [itemListenerMixin, backTopMixin],

    created() {
      //1.保存传入的参数iid
      this.iid = this.$route.params.iid;
      // console.log(this.$route.params);

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {

        console.log(res);
        //1.获取数据
        const data = res.result;
        //2.获取顶部的图片轮播数据
        this.topImages = res.result.itemInfo.topImages;

        //3.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        //4.创建店铺信息对象
        this.shop = new Shop(data.shopInfo);

        //5.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        //6.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        //7.获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
        ;

        // this.$nextTick(() => {
        //   //根据最新的数据，对应的DOM是已经被渲染出来了
        //   //但是图片依然是没有加载完（目前获取到offsetTop不包含其中的图片）
        //   this.themeTopY = [];
        //   this.themeTopY.push(0);
        //   this.themeTopY.push(this.$refs.param.$el.offsetTop);
        //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.themeTopY);
        // });
      });

      //3.请求推荐数据
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list;
      });

      // //4.给getThemeTopY赋值
      // this.getThemeTopY = debounce(() => {
      //   this.themeTopY = [];
      //   this.themeTopY.push(0);
      //   this.themeTopY.push(this.$refs.param.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopY);
      // },100)

    },
    mounted() {

    },

    // updated(){
    //   this.themeTopY = [];
    //   this.themeTopY.push(0);
    //   this.themeTopY.push(this.$refs.param.$el.offsetTop);
    //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
    //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
    //   console.log(this.themeTopY);
    // },
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImageListener);
    },

    computed: {},

    methods: {
      ...mapActions(['addCart']),
      detailImageLoad() {
        this.refresh();
        // this.getThemeTopY();
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.param.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);
        console.log(this.themeTopY);
      },

      titleClick(index) {

        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
      },

      contentScroll(position) {
        //1.获取y值
        const positionY = -position.y;
        let length = this.themeTopY.length
        for (let i = 0; i < length - 1; i++) {

          if (this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])) {
            this.currentIndex = i;
            console.log(i);
            this.$refs.detailNav.currentIndex = this.currentIndex;
          }
        }

        this.isShowBackTop = -position.y > BACK_POSITION;
      },

      addToCart() {
        //1.获取购物车需要展示的信息
        const product = {};
        console.log(this.iid);
        product.image = this.topImages[0];
        product.title = this.detailInfo.title;
        product.desc = this.detailInfo.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        // this.$store.commit('addCart',product)
        //dispatch会返回一个promise
        //将商品添加到购物车（1.Promise 2.mapActions）
        this.addCart(product).then(res =>{
        //     this.show = true;
        //     this.message = res;
        //     setTimeout(() =>{a
        //        this.show = false;
        //        this.message = '';
        //     },1000);
        //     console.log(res);
        //   });
        // }
        this.$toast.show(res, 1000);
        console.log(this.$toast);

      });//3.是否显示回到顶部


        // if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])
        //   || (i === length - 1 && positionY >= this.themeTopY[i]))) {
        //   this.currentIndex = i;
        //   // console.log(this.currentIndex);
        //   this.$refs.detailNav.currentIndex = this.currentIndex;
        // }


        //2.positionY和主题中值进行对比
        // let length = this.themeTopY.length;
        // for(let i = 0;i<this.themeTopY.length;i++){
        //   console.log(i);
        //   // if (positionY > this.themeTopY[i] && positionY < this.themeTopY[]){
        //   //   console.log(i);
        //   // }
        //   if ((i < length - 1 && positionY > this.themeTopY[i] && positionY < this.themeTopY[i + 1])
        //       || (i === length - 1 && positionY > this.themeTopY[i])) {
        //     console.log(i);
        //   }
      }


    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px);

  }


</style>
