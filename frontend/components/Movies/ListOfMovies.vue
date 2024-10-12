<template>
  <div class="bg-gray-900 text-white pb-12">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
        Available Movies
      </h1>

      <p class="text-gray-300 mb-8 max-w-2xl">
        Explore the latest movies and book your tickets in advance. View details for more information about each film.
      </p>

      <div v-if="loading" class="text-center py-8">
        <p class="text-xl">Loading movies...</p>
      </div>

      <div v-else-if="error" class="text-center py-8">
        <p class="text-xl text-red-500">Error loading movies. Please try again later.</p>
      </div>

      <div v-else >
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <li
          v-for="movie in movies" 
          :key="movie.id" 
          class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group"
        >
          <img :src="movie.poster_url" :alt="movie.title" class="w-full h-full object-cover" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h2 class="font-bold text-xl mb-2 truncate">{{ movie.title }}</h2>
            <p class="text-sm text-gray-300 mb-4">{{ movie.genre }}</p>
            <div class="flex space-x-2">
              <button 
                @click="buyTicket(movie)"
                class="flex-1 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Buy Ticket
              </button>
              <button 
                @click="viewDetails(movie.id)"
                class="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                View Details
              </button>
            </div>
          </div>
        </li>
      </div>
      
      <!-- Pagination -->
       <div class="flex justify-center items-center mt-12 mb-8">
      <Pagination 
          :total-pages="totalPages" 
          :current-page="currentPage"
          @page-change="handlePageChange"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useMovies } from '@/composables/useMovies'
import Pagination from './Pagination.vue'

const { $locally } = useNuxtApp()

const currentPage = ref(1)
const pageSize = 12

const router = useRouter()

const { movies, totalCount, loading, error, changePage} = useMovies(currentPage, pageSize)

const totalPages = computed(() => Math.ceil(totalCount.value / pageSize))

const handlePageChange = (newPage) => {
  currentPage.value = newPage
  changePage(newPage)
}

const buyTicket = (movie) => {
    // Store all relevant movie details
    const movieDetails = {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_url,
        duration: movie.duration,
        genre: movie.genre
    }

    $locally.setItem('movieDetails', JSON.stringify(movieDetails))
    
    router.push(`/movie/buyticket/`)
}

</script>
