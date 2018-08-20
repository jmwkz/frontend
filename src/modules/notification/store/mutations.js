import {
  CREATE_NOTIFICATION,
  DELETE_NOTIFICATION,
} from '@/definition'

export default {
  [CREATE_NOTIFICATION](state, notification) {
    state.data.push(notification)
  },
  [DELETE_NOTIFICATION](state, index) {
    state.data.splice(index, 1)
  },
}
