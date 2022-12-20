import Vue from 'vue'
import App from './App.vue'
import MainButton from './components/MainButton.vue'

Vue.config.productionTip = false

// Definindo um componente global!!
Vue.component('MainButton', MainButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
