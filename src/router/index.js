import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('@/views/home/Home');
const Category = () => import('@/views/category/Category');
const Cart = () => import('@/views/cart/Cart');
const Profile = () => import('@/views/profile/Profile');
const Detail = () => import('@/views/detail/Detail');
const LogIn = () => import('@/views/login/LogIn');

//安装插件
Vue.use(VueRouter);

//创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/login',
    component:LogIn
  }

]

const RouterConfig = {
  routes:routes,
  mode:'history'
};

const router = new VueRouter(RouterConfig);


export default router
