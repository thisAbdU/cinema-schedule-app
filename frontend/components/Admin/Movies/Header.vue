<template>
    <div class="w-full max-w-4xl mx-auto p-6 bg-gray-900 rounded-xl shadow-2xl">
      <div class="flex space-x-6">
        <div class="flex-1 space-y-6">
          <!-- Add Movie Button -->
          <button class="w-full flex items-center justify-center px-6 py-4 bg-custom-gradient rounded-lg text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 group">
            <svg class="w-6 h-6 mr-2 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Add Movie
          </button>
  
          <!-- Total Number of Movies Box -->
          <div class="w-full bg-gray-800 rounded-lg flex items-center justify-center text-white shadow-lg p-6">
            <div class="text-center">
              <svg class="w-16 h-16 mx-auto mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
              </svg>
              <p class="text-3xl font-bold bg-custom-gradient bg-clip-text text-transparent">Total Movies</p>
              <p class="text-5xl font-bold mt-2">150</p>
            </div>
          </div>
        </div>
  
        <!-- Most Booked Movie Box -->
        <div class="relative w-[calc(100%/3)] bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
          <img class="w-full h-fit object-cover" src="../../../static/img/sost-mazen-cover.jpg" alt="Most Booked Movie">
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div class="text-center">
              <p class="font-bold text-2xl mb-2">Movie Title</p>
              <p class="text-sm mb-1">Date Added: 2024-09-15</p>
              <p class="text-lg font-semibold">Booked: 350 times</p>
            </div>
          </div>
          <div class="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Booked
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can add any necessary imports or logic here
  </script>
  