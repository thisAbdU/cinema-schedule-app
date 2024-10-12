import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { useAuth } from './composables/useAuth';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

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
