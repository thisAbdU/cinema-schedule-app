<template>
    <nav class="bg-gray-900 bg-opacity-80 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-800">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../assets/img/logo-no-background.svg" class="h-12" alt="Cinema Logo">
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
          <form @submit.prevent="handleSearch" class="relative">
            <input 
              v-model="searchQuery"
              type="text"
              id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-white bg-gray-800 border border-gray-700 rounded-full placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Search movies..."
            />
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon class="w-4 h-4 text-gray-400" />
            </div>
          </form>
          
          <div class="relative" v-click-outside="closeUserMenu">
            <button 
              @click="toggleUserMenu"
              type="button"
              class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
            >
              <span class="sr-only">Open user menu</span>
              <img 
                src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                alt="User avatar"
                class="w-8 h-8 rounded-full"
            />
            </button>
            <div 
              v-show="isUserMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50"
            >
              <a href="/profile" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Profile</a>
              <a href="/settings" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Settings</a>
              <a @click="handleLogout" href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Log out</a>
            </div>
          </div>
          
          <button 
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            :aria-expanded="isMenuOpen.toString()"
          >
            <span class="sr-only">{{ isMenuOpen ? 'Close main menu' : 'Open main menu' }}</span>
            <MenuIcon class="w-5 h-5" />
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
  import { SearchIcon, MenuIcon } from 'lucide-vue-next'
  
  const searchQuery = ref('')
  const isMenuOpen = ref(false)
  const isUserMenuOpen = ref(false)
  
  const navItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'Movies', href: '/movies', active: false },
    { name: 'Bookmarks', href: '/bookmarks', active: false },
    { name: 'Contact', href: '/contact', active: false },
  ]
  
  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery.value)
  }
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value
  }
  
  const closeUserMenu = () => {
    isUserMenuOpen.value = false
  }
  
  const handleLogout = () => {
    // TODO: Implement logout functionality
    console.log('Logging out')
  }
  
  // Custom directive for clicking outside
  const clickOutside = {
    mounted(el, binding) {
      el.clickOutsideEvent = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value()
        }
      }
      document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutsideEvent)
    },
  }
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>