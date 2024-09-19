<template>
  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/img/logo-no-background.svg" class="h-16" alt="Cinema Logo">
      </a>
      <div class="flex md:order-2 space-x-12 rtl:space-x-reverse">
        <form @submit.prevent="handleSearch">
          <input 
            v-model="searchQuery"
            type="text"
            id="search-navbar"
            class="block p-3 ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </form>
        <button 
          type="button"
          class="text-white bg-custom-gradient hover:bg-custom-gradient-hover focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-md px-8 py-2.5 text-center me-2 mb-2"
        >
          Get started
        </button>
        <button 
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" class="relative block py-2 px-3 text-custom-gradient md:p-0 dark:text-white group">
              Home
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-custom-gradient transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a href="#" class="relative block py-2 px-3 text-custom-gradient md:p-0 dark:text-white group">
              Movies
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-custom-gradient transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a href="#" class="relative block py-2 px-3 text-custom-gradient md:p-0 dark:text-white group">
              Bookmarks
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-custom-gradient transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a href="#" class="relative block py-2 px-3 text-custom-gradient md:p-0 dark:text-white group">
              FAQ
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-custom-gradient transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  searchQuery: yup.string().required('Search query is required')
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const searchQuery = ref('')

const handleSearch = handleSubmit(values => {
  console.log('Search query:', values.searchQuery)
})
</script>

<style scoped>
/* Add any specific styles here */
</style>
