<template>
    <div class="relative min-h-screen bg-gray-900 overflow-hidden">
      <!-- Background strikes -->
      <div class="absolute inset-0 overflow-hidden">
        <svg class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="strikes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#strikes)" />
        </svg>
      </div>
  
      <div class="container mx-auto p-4 relative z-10">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4766] to-[#5C28D4] mb-8 text-center">
          Your Bookmarked Movies
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="movie in bookmarkedMovies" :key="movie.id" 
               class="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg backdrop-filter backdrop-blur-sm
                      transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img :src="movie.posterUrl" :alt="movie.title" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h2 class="text-2xl font-bold text-white mb-2">{{ movie.title }}</h2>
              <p class="text-gray-300 mb-4">{{ movie.description }}</p>
              <div class="mb-4">
                <h3 class="text-lg font-semibold text-[#FF4766] mb-2">Showtimes:</h3>
                <ul class="space-y-1">
                  <li v-for="(showtime, index) in movie.showtimes" :key="index" class="text-gray-300">
                    {{ showtime }}
                  </li>
                </ul>
              </div>
              <div class="flex justify-between items-center">
                <button @click="bookTickets(movie)" 
                        class="bg-gradient-to-r from-[#FF4766] to-[#5C28D4] text-white font-bold py-2 px-4 rounded-lg
                               hover:from-[#FF5F7E] hover:to-[#7440E7] transition duration-300 ease-in-out">
                  Book Tickets
                </button>
                <button @click="removeBookmark(movie.id)" 
                        class="text-gray-300 hover:text-white transition duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
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
  
  //TODO: to be handled in the backend
  // Mock data for bookmarked movies
  const bookmarkedMovies = ref([
    {
      id: 1,
      title: "Inception",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
      posterUrl: "https://example.com/inception-poster.jpg",
      showtimes: ["Today 7:00 PM", "Today 10:00 PM", "Tomorrow 3:00 PM", "Tomorrow 9:00 PM"]
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl: "https://example.com/shawshank-poster.jpg",
      showtimes: ["Today 6:30 PM", "Today 9:30 PM", "Tomorrow 4:00 PM", "Tomorrow 8:00 PM"]
    },
    {
      id: 3,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterUrl: "https://example.com/pulp-fiction-poster.jpg",
      showtimes: ["Today 8:00 PM", "Tomorrow 2:00 PM", "Tomorrow 7:00 PM"]
    }
  ])
  
  const bookTickets = (movie) => {
    // In a real application, this would navigate to the booking page for the selected movie
    console.log(`Booking tickets for ${movie.title}`)
    alert(`Navigating to booking page for ${movie.title}`)
  }
  
  const removeBookmark = (movieId) => {
    bookmarkedMovies.value = bookmarkedMovies.value.filter(movie => movie.id !== movieId)
  }
  </script>