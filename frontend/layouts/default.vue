<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden">
    <!-- Animated lines -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 5" :key="i" 
           :class="`absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-move-line-${i}`">
      </div>
    </div>

    <!-- Main content area -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

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

@keyframes moveLineDiagonal2 {
  0% { transform: translate(-100%, 0%) rotate(-45deg); }
  100% { transform: translate(100%, 0%) rotate(-45deg); }
}

@keyframes moveLineDiagonal3 {
  0% { transform: translate(0%, -100%) rotate(0deg); }
  100% { transform: translate(0%, 100%) rotate(0deg); }
}

@keyframes moveLineDiagonal4 {
  0% { transform: translate(-100%, 50%) rotate(30deg); }
  100% { transform: translate(100%, -50%) rotate(30deg); }
}

@keyframes moveLineDiagonal5 {
  0% { transform: translate(100%, -50%) rotate(-30deg); }
  100% { transform: translate(-100%, 50%) rotate(-30deg); }
}

.animate-move-line-1 {
  animation: moveLineDiagonal1 var(--animation-duration, 15s) linear infinite;
  animation-delay: var(--animation-delay, 0s);
}

.animate-move-line-2 {
  animation: moveLineDiagonal2 var(--animation-duration, 18s) linear infinite;
  animation-delay: var(--animation-delay, 0.5s);
}

.animate-move-line-3 {
  animation: moveLineDiagonal3 var(--animation-duration, 20s) linear infinite;
  animation-delay: var(--animation-delay, 1s);
}

.animate-move-line-4 {
  animation: moveLineDiagonal4 var(--animation-duration, 22s) linear infinite;
  animation-delay: var(--animation-delay, 1.5s);
}

.animate-move-line-5 {
  animation: moveLineDiagonal5 var(--animation-duration, 25s) linear infinite;
  animation-delay: var(--animation-delay, 2s);
}
</style>