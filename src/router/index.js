import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../components/detail/detail.vue'
/* import bg from '../components/bg.vue' */

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
 },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:iid',
    component:Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
