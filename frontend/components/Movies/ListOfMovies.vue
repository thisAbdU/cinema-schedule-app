<template>
  <div class="bg-gray-900 text-white pb-12">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
        Available Movies
      </h1>

      <p class="text-gray-300 mb-8 max-w-2xl">
        Explore the latest movies and book your tickets in advance. View details for more information about each film.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="movie in movies" 
          :key="movie.id" 
          class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group"
        >
          <img :src="movie.poster" :alt="movie.title" class="w-full h-full object-cover" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h2 class="font-bold text-xl mb-2 truncate">{{ movie.title }}</h2>
            <p class="text-sm text-gray-300 mb-4">{{ movie.genre }}</p>
            <div class="flex space-x-2">
              <button 
                @click="buyTicket(movie.id)"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const movies = ref([
  { id: 1, title: "The Shawshank Redemption", genre: "Drama", poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" },
  { id: 2, title: "The Godfather", genre: "Crime", poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" },
  { id: 3, title: "The Dark Knight", genre: "Action", poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" },
  { id: 4, title: "12 Angry Men", genre: "Drama", poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" },
  { id: 5, title: "Pulp Fiction", genre: "Crime", poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" },
  { id: 6, title: "Schindler's List", genre: "Biography", poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" },
  { id: 7, title: "Inception", genre: "Sci-Fi", poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" },
  { id: 8, title: "Forrest Gump", genre: "Drama", poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" },
  { id: 9, title: "The Matrix", genre: "Sci-Fi", poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" },
  { id: 10, title: "Goodfellas", genre: "Crime", poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" },
  { id: 11, title: "The Silence of the Lambs", genre: "Thriller", poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" },
  { id: 12, title: "Saving Private Ryan", genre: "War", poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" },
])

const buyTicket = (movieId) => {
  // TODO: Implement ticket purchase logic
  console.log(`Buying ticket for movie with ID: ${movieId}`)
}

const viewDetails = (movieId) => {
  // TODO: Implement view details logic
  console.log(`Viewing details for movie with ID: ${movieId}`)
}
</script>