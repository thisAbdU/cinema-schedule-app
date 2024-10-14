<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950">
    <NuxtLayout :name="layout">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const route = useRoute()
const authStore = useAuthStore()

const layout = computed(() => {
  // Check if the current route is an admin route
  if (route.path.startsWith('/admin')) {
    // Ensure the user is actually an admin
    return authStore.isAdmin ? 'admin' : 'default'
  } 
  return 'default'
})
</script>