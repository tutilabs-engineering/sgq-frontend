import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import VueParticles from 'vue-particles';

const app = createApp(App)
app.use(VueParticles);
app.use(router)
app.use(VueSweetalert2);
app.mount('#app')
app.use(VueChartkick)

