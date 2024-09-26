<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden pb-24">
    <!-- Background Animation -->
    <div class="absolute inset-0">
      <div class="line-animation"></div>
      <div class="background-elements">
        <div v-for="i in 3" :key="i" :class="`shape shape-${i}`"></div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <!-- Left Side - Heading and Message -->
      <div class="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Reset Your Password
        </h1>
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6 inline-block">
          <div class="flex items-center">
            <svg class="w-8 h-8 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
            </svg>
            <p class="text-lg font-semibold text-white">Enter your email to receive a password reset link.</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Forgot Password Form -->
      <div class="w-full md:w-1/2 max-w-md">
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700">
          <h2 class="text-3xl font-bold mb-6 text-white">Forgot Password</h2>

          <form @submit.prevent="handleSubmit">
            <div class="space-y-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="Enter your email"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Send Reset Link
            </button>
          </form>

          <div class="mt-6 text-center text-sm">
            <p class="text-gray-400">
              Remember your password?
              <a href="/signin" class="text-pink-500 hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubmit = () => {
  // TODO: Implement actual password reset logic here
  console.log('Password reset requested for:', email.value)
  alert('Password reset link has been sent to your email!')
  email.value = ''
}
</script>

<style scoped>
.line-animation {
  @apply absolute inset-0 pointer-events-none z-10;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.03) 2px,
    rgba(255, 255, 255, 0.03) 4px
  );
  animation: lineMove 20s linear infinite;
}

@keyframes lineMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

.background-elements {
  @apply absolute inset-0 overflow-hidden pointer-events-none;
}

.shape {
  @apply absolute w-36 h-36 bg-white bg-opacity-5 rounded-full;
  animation: moveShape 20s infinite ease-in-out;
}

.shape-1 { top: 20%; left: 15%; animation-duration: 14s; }
.shape-2 { top: 70%; left: 50%; animation-duration: 18s; }
.shape-3 { top: 50%; left: 80%; animation-duration: 12s; }

@keyframes moveShape {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(100px, 50px); }
}
</style>