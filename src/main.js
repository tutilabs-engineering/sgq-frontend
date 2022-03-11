import dotenv from "dotenv"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import VueParticles from 'vue-particles';

import VueApexCharts from "vue3-apexcharts"

dotenv.config()

const options = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000
}

const app = createApp(App).use(store)
app.use(Toast, options)
app.use(store);
app.use(VueParticles);
app.use(router)
app.use(VueSweetalert2);
app.use(VueChartkick);
app.use(VueApexCharts)
app.mount('#app')

