import Vue from 'vue'
import App from './App.vue'
import VeLine from 'v-charts/lib/line.common'

Vue.config.productionTip = false

Vue.component(VeLine.name, VeLine)

new Vue({
  render: h => h(App),
}).$mount('#app')
