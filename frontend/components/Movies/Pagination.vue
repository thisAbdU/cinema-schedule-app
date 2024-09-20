<template>
    <nav aria-label="Page navigation">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <!-- Previous Button -->
        <li>
          <a 
            href="#" 
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Previous Page"
            :class="{'disabled': currentPage === 1}"
          >
            <span class="sr-only">Previous</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </a>
        </li>
  
        <!-- Page Numbers -->
        <li v-for="page in totalPages" :key="page">
          <a
            href="#"
            @click.prevent="goToPage(page)"
            :aria-current="page === currentPage ? 'page' : false"
            class="flex items-center justify-center px-3 h-8 leading-tight"
            :class="{
              'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': page !== currentPage,
              'text-white bg-[#6B2BC9] border-blue-300': page === currentPage
            }"
          >
            {{ page }}
          </a>
        </li>
  
        <!-- Next Button -->
        <li>
          <a 
            href="#" 
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            aria-label="Next Page"
            :class="{'disabled': currentPage === totalPages}"
          >
            <span class="sr-only">Next</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPage: 1, // Track the current page
        totalPages: 3 // Total number of pages (replace with dynamic data if needed)
      }
    },
    methods: {
      goToPage(page) {
        // Update the current page number
        this.currentPage = page;
        // Implement any pagination logic, e.g., fetching new data for the selected page
      }
    }
  }
  </script>
  