import state from './store/state'
import getters from './store/getters'
import actions from './store/actions'
import mutations from './store/mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
