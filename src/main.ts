import { createApp } from 'vue'
import Foo from './components/Foo.vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:email', component: Foo },
    ],
});

createApp(App).use(router).mount('#app');
