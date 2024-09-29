const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: SignUp }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;