const routes = [
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/components/Auth/Signup.vue'),
      meta: { hideNavbar: true }
    },
    // other routes...
  ]
  