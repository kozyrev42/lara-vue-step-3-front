import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


import router from './router';

// создание экземпляра приложения Vue и добавление Axios в глобальные свойства, чтобы мы могли использовать его везде

const app = createApp(App);                             // Создание экземпляра приложения Vue
app.config.globalProperties.$axios = axios;             // Подключение axios
app.use(store);                                         // Подключение store
app.use(router).mount('#app');               // Подключение router