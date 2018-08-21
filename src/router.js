import Vue from 'vue'
import Router from 'vue-router'

import auth from './utils/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      beforeEnter: (to, from, next) => {
        auth.verifyLogin().then(() => {
          next()
        }).catch(() => {
          next('/login')
        })
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      beforeEnter: (to, from, next) => {
        auth.verifyLogin().then(() => {
          next()
        }).catch(() => {
          next('/login')
        })
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      beforeEnter: (to, from, next) => {
        auth.verifyLogin().then(() => {
          next('/')
        }).catch(() => {
          next()
        })
      },
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import(/* webpackChunkName: "signup" */ './views/Signup.vue'),
      beforeEnter: (to, from, next) => {
        auth.verifyLogin().then(() => {
          next('/')
        }).catch(() => {
          next()
        })
      },
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "notfound" */'./views/NotFound.vue'),
    },
  ],
})
