import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TheLoading from './components/TheLoading'

Vue.config.productionTip = false

Vue.component('TheLoading', TheLoading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
