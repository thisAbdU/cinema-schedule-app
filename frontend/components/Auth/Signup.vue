<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0">
      <div class="line-animation"></div>
      <div class="movie-elements">
        <div v-for="i in 3" :key="i" :class="`movie-element element-${i}`"></div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <!-- Left Side - Heading and Message -->
      <div class="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Roll Out the Red Carpet!
        </h1>
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6 inline-block">
          <div class="flex items-center">
            <svg class="w-8 h-8 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <p class="text-lg font-semibold text-white">Be the first to catch the show!</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Sign-up Form -->
      <div class="w-full md:w-1/2 max-w-md">
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700">
          <h2 class="text-3xl font-bold mb-6 text-white">Sign Up</h2>

          <form @submit.prevent="handleSubmit">
            <div class="space-y-4">
              <div v-for="field in formFields" :key="field.id">
                <label :for="field.id" class="block text-sm font-medium text-gray-300 mb-1">{{ field.label }}</label>
                <input
                  :type="field.type"
                  :id="field.id"
                  v-model="form[field.id]"
                  :placeholder="field.placeholder"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            <router-link to="/auth/signup">
            <button
              type="submit"
              class="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign Up
            </button>
          </router-link>
          </form>

          <div class="mt-6 flex items-center justify-center">
            <span class="bg-gray-700 px-4 text-sm text-gray-400">or</span>
            <hr class="w-full border-t border-gray-700" />
          </div>

          <div class="mt-6 space-y-4">
            <button
              v-for="provider in socialProviders"
              :key="provider.name"
              :class="`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${provider.color}-500 ${provider.bgClass} ${provider.textClass}`"
            >
              <component :is="provider.icon" class="w-5 h-5" />
              <span>Sign up with {{ provider.name }}</span>
            </button>
          </div>

          <div class="mt-6 text-center text-sm">
            <p class="text-gray-400">
              Already registered?
              <a href="/login" class="text-pink-500 hover:underline">Sign in</a>
            </p>
            <p class="mt-2">
              <a href="/support" class="text-pink-500 hover:underline">Customer Support</a>
            </p>

            <p class="mb-20">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CircleUser, FacebookIcon } from 'lucide-vue-next'


const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const formFields = [
  { id: 'name', type: 'text', label: 'Username', placeholder: 'Enter your username' },
  { id: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email' },
  { id: 'password', type: 'password', label: 'Password', placeholder: 'Create a password' },
  { id: 'confirmPassword', type: 'password', label: 'Confirm Password', placeholder: 'Confirm your password' }
]

const socialProviders = [
  { name: 'Google', icon: CircleUser, bgClass: 'bg-white', textClass: 'text-gray-800', color: 'gray' },
  { name: 'Facebook', icon: FacebookIcon, bgClass: 'bg-blue-600', textClass: 'text-white', color: 'blue' }
]

const handleSubmit = () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Passwords do not match')
    return
  }
  // TODO: Implement actual form submission logic here
  console.log('Form submitted:', form.value)
  alert('Form submitted successfully')
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

.movie-elements {
  @apply absolute inset-0 overflow-hidden pointer-events-none;
}

.movie-element {
  @apply absolute w-12 h-12 bg-white bg-opacity-5 rounded-full;
  animation: moveElement 20s infinite ease-in-out;
}

.element-1 { top: 10%; left: 20%; animation-duration: 15s; animation-delay: -2s; }
.element-2 { top: 50%; left: 60%; animation-duration: 18s; animation-delay: -5s; }
.element-3 { top: 80%; left: 10%; animation-duration: 20s; animation-delay: -8s; }

@keyframes moveElement {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(100px, 50px); }
}
</style>
