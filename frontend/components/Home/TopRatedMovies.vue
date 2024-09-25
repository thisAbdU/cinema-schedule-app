<template>
  <section class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-4 text-center">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
          Top Rated Movies of the Month
        </span>
      </h2>
      
      <p class="text-gray-300 mb-12 max-w-2xl mx-auto text-center">
        Discover the highest-rated movies this month, handpicked by movie lovers just like you. Don't miss out on these must-watch films with top reviews and glowing ratings!
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="movie in movies" 
          :key="movie.id" 
          class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img :src="movie.poster" :alt="movie.title" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-md">
            {{ movie.rating }}
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 class="font-bold text-xl mb-2 truncate">{{ movie.title }}</h3>
            <p class="text-sm text-gray-300 mb-2">{{ movie.genre }}</p>
            <button class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const movies = ref([
  { 
    id: 1, 
    title: "The Shawshank Redemption", 
    rating: 9.3, 
    genre: "Drama",
    poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" 
  },
  { 
    id: 2, 
    title: "The Godfather", 
    rating: 9.2, 
    genre: "Crime, Drama",
    poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" 
  },
  { 
    id: 3, 
    title: "The Dark Knight", 
    rating: 9.0, 
    genre: "Action, Crime, Drama",
    poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" 
  },
  { 
    id: 4, 
    title: "12 Angry Men", 
    rating: 8.9, 
    genre: "Crime, Drama",
    poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" 
  },
])
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>