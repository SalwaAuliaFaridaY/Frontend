import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/Navbar.vue'
import Footer from '../views/Footer.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Jual from '../views/Jual.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {default: Home, header: Navbar, footer: Footer},
  },
  {
    path: '/login',
    name: 'Login',
    components: {default: Login, header: Navbar, footer: Footer},
  },
  {
    path: '/jual',
    name: 'Jual',
    components: {default: Jual, header: Navbar, footer: Footer},
  },
  {
    path: '/detail',
    name: 'Detail',
    components: {default: Detail, header: Navbar, footer: Footer},
  },
  {
    path: '/footer',
    name: 'Footer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Footer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
