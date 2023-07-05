import { createRouter, createWebHistory } from 'vue-router';

// Импортируйте ваши компоненты для маршрутов
import PostsComponent from "@/components/part1/PostsComponent";
import HomeComponent from "@/components/part2/HomeComponent";

// роуты
const routes = [
    { path: '/part1', component: PostsComponent },
    { path: '/part2', component: HomeComponent },
];

// создание экземпляра маршрутизатора и передача опций `routes`
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;