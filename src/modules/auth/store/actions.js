import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '@/definition'
import request, { headers } from '@/utils/request'

import router from '@/router'

export default {
  login({ commit }, data) {
    commit(LOGIN)
    return request.post(`${process.env.VUE_APP_SERVER_URL}/api-token-auth/`, data, headers())
      .then((response) => {
        commit(LOGIN_SUCCESS, response.token)
        router.push({ path: '/' })
      })
      .catch(() => commit(LOGIN_FAIL))
  },
  logout({ commit }) {
    commit(LOGOUT)
    router.push({ path: '/login' })
  },
}
