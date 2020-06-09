import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AgCookie from './cookie' //ubaci ovo

Vue.config.productionTip = false
Vue.prototype.$cookie = AgCookie //pozvali smo 

new Vue({
  router,
  AgCookie, //i ovo ubaci da radi ag cookie
  render: h => h(App)
}).$mount('#app')
