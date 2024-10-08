import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { useAuth } from './composables/useAuth';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Your routes here
  ],
});

const { checkAuth } = useAuth();

router.beforeEach((to, from, next) => {
  checkAuth();
  next();
});

app.use(router);
app.mount('#app');