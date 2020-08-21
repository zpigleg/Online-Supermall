import {request} from "./request";

export function getHomeMultiData(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
  }
  })
}

// let totalNums = []
// const nums = [20,11,222]
// const nums = [20,11 ,22]
//
// // for (let n of nums){
// //   totalNums.push(n)
// // }
//
// totalNums.push(...nums1);//可以传很多参数

