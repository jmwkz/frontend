import Vue from 'vue'
import Router from 'vue-router'

import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
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
      component: () => import('./views/About.vue'),
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
      component: () => import('./views/Login.vue'),
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuthenticated']) {
          next('/')
        } else {
          next()
        }
      },
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('./views/Signup.vue'),
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/isAuthenticated']) {
          next('/')
        } else {
          next()
        }
      },
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue'),
    },
  ],
})
