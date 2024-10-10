<template>
  <nav aria-label="Page navigation" class="mt-8">
    <ul class="flex items-center justify-center space-x-2">
      <!-- Previous Button -->
      <li>
        <button 
          @click="goToPage(props.currentPage - 1)"
          :disabled="props.currentPage === 1"
          class="flex items-center justify-center px-3 h-10 rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous Page"
        >
          <svg class="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </li>

      <!-- Page Numbers -->
      <li v-for="page in visiblePages" :key="page">
        <button
          @click="goToPage(page)"
          :aria-current="page === props.currentPage ? 'page' : undefined"
          class="flex items-center justify-center px-4 h-10 rounded-md text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500"
          :class="{
            'bg-gray-800 hover:bg-gray-700': page !== props.currentPage,
            'bg-gradient-to-r from-pink-500 to-orange-400': page === props.currentPage
          }"
        >
          {{ page }}
        </button>
      </li>

      <!-- Next Button -->
      <li>
        <button 
          @click="goToPage(props.currentPage + 1)"
          :disabled="props.currentPage === props.totalPages"
          class="flex items-center justify-center px-3 h-10 rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next Page"
        >
          <svg class="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['page-change'])

const visiblePages = computed(() => {
  const delta = 3
  const range = []
  const rangeWithDots = []

  for (let i = Math.max(2, props.currentPage - delta); i <= Math.min(props.totalPages - 1, props.currentPage + delta); i++) {
    range.push(i)
  }

  if (range[0] > 3) {
    rangeWithDots.push(1, '...')
  } else {
    rangeWithDots.push(1)
  }

  for (const i of range) {
    rangeWithDots.push(i)
  }

  if (range[range.length - 1] < props.totalPages - 1) {
    rangeWithDots.push('...', props.totalPages)
  } else if (props.totalPages > 1) {
    rangeWithDots.push(props.totalPages)
  }

  return rangeWithDots
})


const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('page-change', page)
  }
}
</script>