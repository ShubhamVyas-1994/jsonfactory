// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from '@/plugins/vuetify'
import '@/assets/css/index.css'
import store from './store/store'
import { VueMaskDirective } from 'v-mask'
import './filters/filter.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.directive('mask', VueMaskDirective)
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  store,
  template: '<App/>'
})
