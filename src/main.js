import { createApp } from 'vue'
import App from './App.vue'
import '@/style.css'
import router from './router'
import store from './store/index'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).use(router).use(store).mount('#app')
