import { createRouter, createWebHistory } from 'vue-router';
import About from './Pages/About.vue';
import Work from './Pages/Work.vue';
import Hobbies from './Pages/Hobbies.vue';

const routes = [
    { path: '/', component: About },
    { path: '/work', component: Work },
    { path: '/hobbies', component: Hobbies },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;