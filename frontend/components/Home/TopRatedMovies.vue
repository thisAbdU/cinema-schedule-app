<template>
  
  <div class="container mx-auto px-4 py-8 bg-gradient-to-br from-[#1E1818] via-[#808080] to-[#787776]">
    <h1 class="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#B99196] to-white">
      Top Rated Movies of the Month
    </h1>
    
    <p class="text-white mb-8 max-w-2xl">
      Discover the highest-rated movies this month, handpicked by movie lovers just like you. Don't miss out on these must-watch films with top reviews and glowing ratings!
    </p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="movie in movies" :key="movie.id" class="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group">
        <img :src="movie.poster" :alt="movie.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity opacity-0 group-hover:opacity-100"></div>
        <div class="absolute top-2 right-2 bg-yellow-400 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          {{ movie.rating }}
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-4 text-white transition-transform translate-y-full group-hover:translate-y-0">
          <h2 class="font-bold text-xl mb-2 truncate">{{ movie.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//TODO: the data should be fetched from backend
const movies = [
  { id: 1, title: "The Shawshank Redemption", rating: 9.3, poster: "https://i.pinimg.com/236x/c6/61/62/c66162a5d679cd5716b4506e23ba8f35.jpg" },
  { id: 2, title: "The Godfather", rating: 9.2, poster: "https://cdn.cinematerial.com/p/297x/zhvo2hr8/drishyam-indian-movie-poster-md.jpg?v=1572887221" },
  { id: 3, title: "The Dark Knight", rating: 9.0, poster: "https://i.pinimg.com/236x/5d/1e/ff/5d1eff9c93d5241b86a49625942175de.jpg" },
  { id: 4, title: "12 Angry Men", rating: 8.9, poster: "https://i.pinimg.com/236x/b2/4d/1d/b24d1d2e3d44e9114176785c215ec353.jpg" },
];
</script>