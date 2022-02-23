import dotenv from "dotenv"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import VueParticles from 'vue-particles';

dotenv.config()

const app = createApp(App).use(store)
app.use(store);
app.use(VueParticles);
app.use(router)
app.use(VueSweetalert2);
app.use(VueChartkick)
app.mount('#app')

