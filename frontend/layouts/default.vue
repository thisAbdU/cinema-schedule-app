<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden">
    <!-- Animated lines -->
    <div v-for="i in 10" :key="i" class="absolute inset-0">
      <div
        class="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent"
        :style="getLineStyles(i)"
      ></div>
    </div>

    <!-- Main content area -->
    <div class="relative z-10">
      <Navbar />
      <main class="pt-16">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

const getLineStyles = (index) => {
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const endX = Math.random() * 100;
  const endY = Math.random() * 100;
  const rotation = Math.random() * 360;
  const animationDuration = 10 + Math.random() * 10 + 's';
  const delay = Math.random() * 10 + 's';

  return {
    left: `${startX}%`,
    top: `${startY}%`,
    transform: `rotate(${rotation}deg)`,
    width: `${Math.random() * 2 + 0.5}px`,
    height: '100%',
    animation: `move-line-${Math.floor(Math.random() * 4) + 1} ${animationDuration} linear infinite`,
    animationDelay: delay,
  };
}
</script>

<style scoped>
@keyframes move-line-1 {
  0% {
    transform: translate(-100%, -100%) rotate(45deg);
  }
  100% {
    transform: translate(100%, 100%) rotate(45deg);
  }
}

@keyframes move-line-2 {
  0% {
    transform: translate(-100%, 100%) rotate(-45deg);
  }
  100% {
    transform: translate(100%, -100%) rotate(-45deg);
  }
}

@keyframes move-line-3 {
  0% {
    transform: translate(-100%, 0) rotate(90deg);
  }
  100% {
    transform: translate(100%, 0) rotate(90deg);
  }
}

@keyframes move-line-4 {
  0% {
    transform: translate(0, -100%) rotate(0deg);
  }
  100% {
    transform: translate(0, 100%) rotate(0deg);
  }
}

.bg-gray-900 {
  background-color: #1a202c;
}
</style>
