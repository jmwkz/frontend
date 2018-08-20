import {
  CREATE_NOTIFICATION,
  DELETE_NOTIFICATION,
} from '@/definition'

export default {
  create({ commit }, data) {
    commit(CREATE_NOTIFICATION, data)
  },
  delete({ commit }, index) {
    commit(DELETE_NOTIFICATION, index)
  },
}
