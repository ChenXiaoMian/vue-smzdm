import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
require('normalize.css')
require('./assets/scss/base.scss')
import loading from './assets/img/loading.gif'

Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading: loading,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
