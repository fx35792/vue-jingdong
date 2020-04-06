import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    redirect: '/login'
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/bottomNav',
    name: 'bottomNav',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        meta: {
          requireAuth: true // 当值为true的时候，我们就认为需要登录验证的
        },
        component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        meta: {
          requireAuth: true // 当值为true的时候，我们就认为需要登录验证的
        },
        component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')
      }
    ],
    component: () => import(/* webpackChunkName: "bottomNav" */ '../views/BottomNav.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
