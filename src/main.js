import Vue from 'vue'
// import App from './App.vue'
import AppTest from './AppTest.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppTest),
}).$mount('#app')
