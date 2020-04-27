import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true 
    }
  },
  {
    path: '/about',
    name: 'About',
    // component: About,
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    meta: {
      keepAlive: true 
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
