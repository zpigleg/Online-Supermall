import {debounce} from "./utils";
import BackTop from '@/components/content/backtop/BackTop';

export const itemListenerMixin = {
  data(){
    return{
      itemImageListener:null,
      refresh:null
    }

  },
  mounted(){
     this.refresh = debounce(this.$refs.scroll.refresh,200);
    //3.监听item中图片加载完成
    this.itemImageListener = ()=>{
      this.refresh();
    };
    this.$bus.$on('itemImageLoad',this.itemImageListener);
    console.log('我是混入中的内容');
  }
};

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop:false
    }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300);
    }
  }
}
