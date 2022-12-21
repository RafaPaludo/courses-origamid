import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Podemos importar o componente assíncrono e usá-lo globalmente!
Vue.component(
  'MyContact',
  () => import('./components/MyContact.vue')  
)

new Vue({
  render: h => h(App),
}).$mount('#app')
