<template>
  <!--ref/children-->
  <!--ref如果是绑定在组件中，那么通过this.$refs.refname获取到的是一个组件对象-->
  <!--ref/children-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType, //probeType:3时才可以实时监听
        pullUpLoad: this.pullUpLoad //设置监听上拉事件的属性，在绑定属性的页面需要写成 pull-uo-load
      });

      //2.监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
          //console.log(position);
          this.$emit('scroll',position);
        });
      }


      //3.监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp');
        });
      }
    },
    methods:{
      scrollTo(x,y,time=300){

        this.scroll && this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      refresh(){
        console.log('------');
       this.scroll && this.scroll.refresh();
      },
      getScrollY(){
        return this.scroll.y ? this.scroll.y : 0;
      }
    }
  }
</script>

<style scoped>

</style>
