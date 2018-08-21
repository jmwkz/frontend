import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
} from '@/definition'

export default {
  [LOGIN](state) {
    state.loading = true
  },
  [LOGIN_SUCCESS](state, token) {
    state.loading = false
    state.isAuthenticated = true
    window.localStorage.setItem('accessToken', token)
    state.token = token
  },
  [LOGIN_FAIL](state) {
    state.loading = false
    state.isAuthenticated = false
    state.token = null
  },
  [SIGNUP](state) {
    state.loading = true
  },
  [SIGNUP_SUCCESS](state, token) {
    state.loading = false
    state.isAuthenticated = true
    window.localStorage.setItem('accessToken', token)
    state.token = token
  },
  [SIGNUP_FAIL](state) {
    state.loading = false
    state.isAuthenticated = false
    state.token = null
  },
  [LOGOUT](state) {
    state.loading = false
    state.isAuthenticated = false
    window.localStorage.removeItem('accessToken')
    state.token = null
  },
}
