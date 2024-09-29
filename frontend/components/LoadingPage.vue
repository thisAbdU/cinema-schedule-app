<template>
  <div class="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
    <div class="text-center">
      <div class="relative w-24 h-24 mx-auto mb-8">
        <!-- Film reel animation with pulsing effect -->
        <div class="absolute inset-0 border-4 border-gray-700 rounded-full animate-spin"></div>
        <div class="absolute inset-2 border-4 border-gray-600 rounded-full animate-spin-slow"></div>
        <div class="absolute inset-4 border-4 border-gray-500 rounded-full animate-spin-slower"></div>
        <div class="absolute inset-0 flex items-center justify-center animate-pulse">
          <svg class="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
          </svg>
        </div>
      </div>
      <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
        <transition-group name="fade" tag="span">
          <span v-for="(letter, index) in loadingText" :key="index" class="inline-block">
            {{ letter }}
          </span>
        </transition-group>
      </h2>
      <p class="text-gray-400 text-lg">
        Preparing your cinematic experience...
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const loadingText = ref('Loading...')
const fullText = 'Loading...'
let currentIndex = 0
let intervalId

const animateText = () => {
  currentIndex = (currentIndex + 1) % (fullText.length + 1)
  loadingText.value = fullText.slice(0, currentIndex) + '_'
}

onMounted(() => {
  intervalId = setInterval(animateText, 200)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes spin-slow {
  to { transform: rotate(-360deg); }
}
@keyframes spin-slower {
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 4s linear infinite;
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}
.animate-spin-slower {
  animation: spin-slower 8s linear infinite;
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>