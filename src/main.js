import Vue from 'vue'
import moment from 'moment'
import router from './router'
import store from './store'
import App from './layout/index.vue'

import './scss/style.scss'
import './assets/css/font-awesome.css'

Vue.prototype.moment = moment

new Vue({
  name: 'Root',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
