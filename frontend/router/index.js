import { createRouter, createWebHistory } from 'vue-router'
import { useBookingStore } from '~/stores/booking'

const routes = [
  { path: '/', component: Home },
  { path: '/signup', component: SignUp },
  { path: '/movie/buyticket/', name: 'buyticket', component: BuyTicket, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const bookingStore = useBookingStore()

  if (to.path.startsWith('/movie/buyticket') && !bookingStore.movieId) {
    // If trying to access the buyticket page without a movie ID, redirect to movies page
    next('/movies')
  } else {
    next()
  }
})

export default router;