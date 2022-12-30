import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import About from '@/views/About';
import TootDetails from '@/views/TootDetails';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'tootDetails',
            path: '/toot-details/:id',
            component: TootDetails,
            props: true
        },

    ]
});

export default router;