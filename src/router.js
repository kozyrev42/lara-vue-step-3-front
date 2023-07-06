import { createRouter, createWebHistory } from 'vue-router';

// Импортируйте ваши компоненты для маршрутов
import PostsComponent from "@/components/part1/PostsComponent";

// роуты
const routes = [
    { path: '/part1', component: PostsComponent },
    { path: '/persons', component: () => import('@/views/Person/PersonIndex'), name: 'persons.index' },
    { path: '/persons/create', component: () => import('@/views/Person/PersonCreate'), name: 'persons.create' },
    { path: '/persons/:id/edit', component: () => import('@/views/Person/PersonEdit'), name: 'persons.edit' },
];

// создание экземпляра маршрутизатора и передача опций `routes`
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;