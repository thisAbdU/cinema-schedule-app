<template>
  <section class="bg-gradient-to-br from-gray-800 to-gray-900 py-16">
    <div class="max-w-5xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="w-full md:w-1/5 mb-6 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-auto">
            <defs>
              <linearGradient id="ticketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FF354D;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#481627;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path fill="url(#ticketGradient)" d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/>
          </svg>
        </div>

        <div class="w-full md:w-3/4 md:pl-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
              Get our Monthly<br>Cinema Updates
            </span>
          </h2>

          <form @submit.prevent="subscribeToNewsletter" class="flex flex-col sm:flex-row max-w-lg mx-auto md:mx-0">
            <input 
              type="email" 
              v-model="email" 
              placeholder="Enter your email address" 
              class="flex-grow px-4 py-2 mb-2 sm:mb-0 bg-white bg-opacity-20 text-white border border-gray-300 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-300"
              required
            />
            <button 
              type="submit" 
              class="px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-md sm:rounded-l-none transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Subscribe
            </button>
          </form>
          <p v-if="subscriptionStatus" :class="['mt-2 text-center md:text-left', subscriptionStatus.type === 'success' ? 'text-green-400' : 'text-red-400']">
            {{ subscriptionStatus.message }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscriptionStatus = ref(null)

const subscribeToNewsletter = async () => {
  try {
    // TODO: Replace this with your actual API call
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    console.log('Subscribing with email:', email.value)
    subscriptionStatus.value = {
      type: 'success',
      message: 'Thank you for subscribing! Check your email for confirmation.'
    }
    email.value = ''
  } catch (error) {
    subscriptionStatus.value = {
      type: 'error',
      message: 'Oops! Something went wrong. Please try again later.'
    }
  }
}
</script>