import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import './assets/style.css'

import {router} from './router'

createApp(App)
.use(router)
.use(Maska)
.mount('#app')