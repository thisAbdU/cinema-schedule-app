<template>
  <nav class="bg-gray-900 bg-opacity-80 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/img/logo-no-background.svg" class="h-12" alt="Cinema Logo">
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
        <form @submit.prevent="handleSearch" class="relative">
          <input 
            v-model="searchQuery"
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-white bg-gray-800 border border-gray-700 rounded-full placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Search movies..."
          />
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
        </form>
        
        <a href="/auth/signup">
        <button 
          type="button"
          class="text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out"
        >
          Get Started
        </button>
        </a>

        <button 
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-sticky"
          :aria-expanded="isMenuOpen.toString()"
        >
          <span class="sr-only">{{ isMenuOpen ? 'Close main menu' : 'Open main menu' }}</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div 
        :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}"
        class="items-center justify-between w-full md:flex md:w-auto md:order-1" 
        id="navbar-sticky"
      >
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          <li v-for="(item, index) in navItems" :key="index">
            <a 
              :href="item.href" 
              class="relative block py-2 px-3 text-white md:p-0 group transition-colors duration-200 hover:text-pink-500"
              :class="{'bg-pink-500 md:bg-transparent text-white md:text-pink-500': item.active}"
            >
              {{ item.name }}
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Home', href: '/', active: true },
  { name: 'Movies', href: '/movies', active: false },
  { name: 'Bookmarks', href: '/bookmarks', active: false },
  { name: 'Contact', href: '/#contact-section', active: false }, 
]

const handleSearch = () => {
  // TODO: Implement search functionality
  console.log('Searching for:', searchQuery.value)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>