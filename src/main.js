import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


//создание экземпляра приложения Vue и добавление Axios в глобальные свойства:
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.mount('#app');
