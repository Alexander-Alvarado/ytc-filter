import Vue from 'vue'
import popup from './popup.vue'

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(popup),
  render: h => h(querey),
  render: h => h(Cameron),
})
