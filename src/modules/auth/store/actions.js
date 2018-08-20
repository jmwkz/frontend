import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
} from '@/definition'
import request, { headers } from '@/utils/request'

import router from '@/router'

export default {
  login({ dispatch, commit }, data) {
    commit(LOGIN)
    return request.post(`${process.env.VUE_APP_SERVER_URL}/auth/`, data, headers())
      .then((response) => {
        commit(LOGIN_SUCCESS, response.token)
        router.push({ path: '/' })
      })
      .catch(() => {
        commit(LOGIN_FAIL)
        dispatch(
          'notification/create',
          {
            message: 'You have entered an invalid username or password.',
            type: 'warning',
          },
          { root: true },
        )
      })
  },
  signup({ dispatch, commit }, data) {
    commit(SIGNUP)
    return request.post(`${process.env.VUE_APP_SERVER_URL}/user/`, data, headers())
      .then((response) => {
        commit(SIGNUP_SUCCESS, response.token)
        router.push({ path: '/' })
      })
      .catch((err) => {
        commit(SIGNUP_FAIL)
        dispatch(
          'notification/create',
          {
            message: err || err.message || 'Something went wrong. Please try again.',
            type: 'error',
          },
          { root: true },
        )
      })
  },
  logout({ commit }) {
    commit(LOGOUT)
    router.push({ path: '/login' })
  },
}
