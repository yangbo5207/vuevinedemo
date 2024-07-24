import { createApp } from 'vue'
import App from './App.vine'
import router from './router'
import {createPinia} from 'pinia'
import './style.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
