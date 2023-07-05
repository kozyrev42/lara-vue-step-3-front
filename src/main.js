import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import router from './router';

// создание экземпляра приложения Vue и добавление Axios в глобальные свойства, чтобы мы могли использовать его везде
// заюзали аксиос и роутер
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(router).mount('#app');