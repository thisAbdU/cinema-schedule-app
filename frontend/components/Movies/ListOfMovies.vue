<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#B99196] to-white">
        Available Movies
      </h1>
  
      <p class="text-gray-700 mb-8 max-w-2xl">
        Explore the latest movies and book your tickets in advance. View details for more information about the film.
      </p>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="movie in movies" :key="movie.id" class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group">
          <img :src="movie.poster" :alt="movie.title" class="w-full h-full object-cover" />
  
          <!-- Dark overlay on hover -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
  
          <!-- Movie title and genre -->
          <div class="absolute bottom-5 left-0 right-0 p-4 text-white transition-transform translate-y-full group-hover:translate-y-0">
            <h2 class="font-bold text-xl mb-2 truncate">{{ movie.title }}</h2>
            <p class="text-sm">{{ movie.genre }}</p>
          </div>
  
          <!-- Buttons positioned at bottom-right -->
          <div class="absolute bottom-0 right-0 p-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="bg-gradient-to-r from-[#FF4766] to-[#5C28D4] text-white px-4 py-2 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:from-[#E33958] hover:to-[#4C22A3]">
              Buy Ticket
            </button>
            <button class="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  //TODO: Replace with real movie data
  const movies = [
    { id: 1, title: "The Shawshank Redemption", genre: "Drama", poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" },
    { id: 2, title: "The Godfather", genre: "Crime", poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" },
    { id: 3, title: "The Dark Knight", genre: "Action", poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" },
    { id: 4, title: "12 Angry Men", genre: "Drama", poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" },
    { id: 5, title: "The Shawshank Redemption", genre: "Drama", poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" },
    { id: 6, title: "The Godfather", genre: "Crime", poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" },
    { id: 7, title: "The Dark Knight", genre: "Action", poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" },
    { id: 8, title: "12 Angry Men", genre: "Drama", poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" },
    { id: 9, title: "The Shawshank Redemption", genre: "Drama", poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" },
    { id: 10, title: "The Godfather", genre: "Crime", poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" },
    { id: 11, title: "The Dark Knight", genre: "Action", poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" },
    { id: 12, title: "12 Angry Men", genre: "Drama", poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" },
  ];
  </script>
  
  <style scoped>
  .group:hover .group-hover\:translate-y-0 {
    transform: translateY(0);
  }
  .group:hover .group-hover\:opacity-100 {
    opacity: 1;
  }
  </style>
  