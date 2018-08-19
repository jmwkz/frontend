import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuthenticated']) {
          next()
        } else {
          next('/login')
        }
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuthenticated']) {
          next()
        } else {
          next('/login')
        }
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuthenticated']) {
          next('/')
        } else {
          next()
        }
      },
    },
  ],
})
