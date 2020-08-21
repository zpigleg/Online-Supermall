import Vue from 'vue';
import  Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

//1.安装插件
Vue.use(Vuex);


//2.创建Store对象
const state = {
  cartList: []
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
    //mutations唯一的目的就是修改state中的状态
    //mutations中的每个方法尽可能完成的事件比较单一一点


      //数组常用的方法有哪些：push/pop/unshift/shift/sort/reverse/map/filter/reduce
      // state.cartList.push(payload);

      //payload新添加的商品
      // let oldProduct = null;
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid){
      //     oldProduct = item;
      //   }
      // }

      //   let oldProduct = state.cartList.find(item => item.iid === payload.iid ); ES6语法
      // let oldProduct = state.cartList.find(function (item) {      //查找之前数组中是否有该商品
      //   return item.iid === payload.iid;
      // });
      //
      // //判断oldProduct是否有值
      // if (oldProduct){
      //   oldProduct.count += 1;
      // }else{
      //   payload.count = 1;
      //   state.cartList.push(payload);
      // }



      // let oldProduct = null;
      // for (let item of state.cartList){
      //   if (item.iid === payload.iid){
      //     oldProduct = item;
      //   }else{
      //     oldProduct.count = 1;
      //     state.cartList.push(payload);
      //   }
      // }
      //查找之前数组中是否有该商品

      // //2.判断oldProduct
      // if (oldProduct){
      //   oldProduct.count += 1;
      // } else {
      //   payload.count = 1;
      //   state.cartList.push(payload);
      // }




});
export default store;
