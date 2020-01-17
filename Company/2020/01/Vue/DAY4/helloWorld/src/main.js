import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)

App.store = store
Vue.customElement('vue-widget',App)

// new Vue({
//   router,
//   store,
//   el: '#app',
//   render: h => h(App)
// }).$mount('#app')
