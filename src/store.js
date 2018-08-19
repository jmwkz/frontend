import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import auth from '@/modules/auth'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    auth,
  },
})
