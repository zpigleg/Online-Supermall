import Toast from './Toast';

const obj = {};

 obj.install = function (Vue) {
   // // Vue.extends(trn);
   // console.log(Toast.$el);
   // document.body.appendChild(Toast.$el);
   //
   //1.创建组件构造器
   const toastConstructor = Vue.extend(Toast);

   //
   const toast = new toastConstructor();

   //将组件对象手动挂载到某一个元素上
   toast.$mount(document.createElement('div'));


   //toast.$el对应的就是div
   document.body.appendChild(toast.$el);

   Vue.prototype.$toast = toast;



};

export default obj;
