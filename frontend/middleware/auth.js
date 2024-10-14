export default defineNuxtRouteMiddleware((to, from) => {
    const { $auth } = useNuxtApp()
    
    if (!$auth.isAdmin) {
      return navigateTo('/login')
    }
  })