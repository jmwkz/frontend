import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '@/definition'

export default {
  [LOGIN](state) {
    state.loading = true
  },
  [LOGIN_SUCCESS](state, token) {
    state.loading = false
    state.isAuthenticated = true
    state.token = token
  },
  [LOGIN_FAIL](state) {
    state.loading = false
    state.isAuthenticated = false
    state.token = null
  },
  [LOGOUT](state) {
    state.loading = false
    state.isAuthenticated = false
    state.token = null
  },
}
