<template>
    <div class="relative min-h-screen bg-gray-900 overflow-hidden">
      <!-- Animated lines -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 5" :key="i" 
             :class="`absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-move-line-${i}`">
        </div>
      </div>
  
      <!-- Main content area -->
      <div class="relative z-10 flex">
        <!-- Sidebar Component -->
        <Sidebar v-if="!$route.meta.hideSidebar" />
  
        <main class="flex-grow pt-12 pb-8"> 
          <slot />
        </main>
      </div>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import Sidebar from '~/components/Admin/Sidebar.vue'
  import Footer from '~/components/Footer.vue'
  
  const route = useRoute()
  const lines = ref([])
  
  onMounted(() => {
    lines.value = Array.from({ length: 5 }, (_, i) => ({
      top: `${20 * i}%`,
      left: '-25%',
      width: '150%',
      transform: `rotate(${Math.random() * 20 - 10}deg)`,
      animationDuration: `${15 + Math.random() * 10}s`,
      animationDelay: `${i * 0.5}s`
    }))
  })
  </script>
  
  <style scoped>
  @keyframes moveLineDiagonal1 {
    0% { transform: translate(-100%, -100%) rotate(45deg); }
    100% { transform: translate(100%, 100%) rotate(45deg); }
  }
  
  /* Other animations remain unchanged */
  
  .animate-move-line-1 {
    animation: moveLineDiagonal1 var(--animation-duration, 15s) linear infinite;
    animation-delay: var(--animation-delay, 0s);
  }
  
  /* Other animate classes remain unchanged */
  </style>
  