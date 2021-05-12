import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false //mới
createApp(App).use(store).use(router).mount('#app')
