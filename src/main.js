import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'

import PrimeVue from 'primevue/config';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Button from 'primevue/button';

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')

app.component('Button', Button);