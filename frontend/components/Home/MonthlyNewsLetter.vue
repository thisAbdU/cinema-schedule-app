<template>
    <div class="bg-[#CCCCCC] p-8">
      <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-20 flex items-center justify-between">
        <!-- Decreased SVG size -->
        <div class="w-1/5"> 
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
  
        <!-- Increased text size -->
        <div class="w-3/4 pl-8">
          <h2 class="text-4xl font-bold mb-4">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FF354D] to-[#481627]">
              Get our Monthly<br>Cinema Updates
            </span>
          </h2>
  
          <!-- Decreased form width -->
          <form @submit.prevent="subscribeToNewsletter" class="flex max-w-lg">
            <input 
              type="email" 
              v-model="email" 
              placeholder="Enter your email address" 
              class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FF354D]"
              required
            />
            <button 
              type="submit" 
              class="px-6 py-2 bg-gradient-to-r from-[#FF354D] to-[#481627] text-white font-semibold rounded-r-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  
  // TODO: Replace this with your own backend URL
  const subscribeToNewsletter = () => {
    console.log('Subscribing with email:', email.value)
    email.value = ''
  }
  </script>
  