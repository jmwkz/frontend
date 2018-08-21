import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VForm,
  VTextField,
  VAlert,
  transitions,
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#448AFF',
    secondary: '#BDBDBD',
    accent: '#82B1FF',
    error: '#FF1744',
    info: '#AED581',
    success: '#00C853',
    warning: '#FFAB00',
  },
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VForm,
    VTextField,
    VAlert,
    transitions,
  },
})
