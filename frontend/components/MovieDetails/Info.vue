<template>
    <div class="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-10">
      <!-- Movie Poster on the left -->
      <div class="md:w-1/3 w-full mb-6 md:mb-0">
        <img
          :src="poster"
          alt="Movie Poster"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
  
      <!-- Movie Info on the right -->
      <div class="md:w-2/3 w-full md:pl-6">
        <!-- Movie Title -->
        <h2 class="text-3xl font-bold mb-2">{{ title }}</h2>
  
        <!-- Movie Genre -->
        <p class="text-gray-700 mb-2">
          <span class="font-semibold">Genre:</span> {{ genre }}
        </p>
  
        <!-- Movie Rating -->
        <div class="flex items-center mb-2">
          <span class="font-semibold text-gray-700">Rating:</span>
          <div class="ml-2 text-yellow-300 flex">
            <template v-for="star in Math.floor(rating)" :key="star">
              <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </template>
          </div>
          <p class="ml-2 text-gray-700">{{ rating }}/10</p>
        </div>
  
        <!-- Movie Runtime -->
        <p class="text-gray-700 mb-2">
          <span class="font-semibold">Runtime:</span> {{ runtime }} min
        </p>
  
        <!-- Release Date -->
        <p class="text-gray-700 mb-2">
          <span class="font-semibold">Release Date:</span> {{ releaseDate }}
        </p>
  
        <!-- Movie Description -->
        <p class="text-gray-600 mb-4">
          {{ description }}
        </p>
  
        <!-- Cast Section -->
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-800">Cast</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="actor in cast" :key="actor">{{ actor }}</li>
          </ul>
        </div>
  
        <!-- Buy Ticket CTA -->
        <button
          @click="buyTicket"
          class="bg-gradient-to-r from-[#FF4766] to-[#5C28D4] text-white py-2 px-4 rounded-lg hover:from-[#E33958] hover:to-[#4C22A3] transition"
        >
          Buy Ticket
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Placeholder data
        poster: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-mistery-movie-poster-design-template-2ec690d65c22aa12e437d765dbf7e4af_screen.jpg?ts=1680854635', // Movie poster URL
        title: 'Inception',
        genre: 'Action, Sci-Fi, Thriller',
        rating: 8.8,
        runtime: 148, // In minutes
        releaseDate: 'July 16, 2010',
        description:
          'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
      };
    },
    methods: {
      buyTicket() {
        // Placeholder for CTA action
        alert('Ticket purchased!');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional component-specific styling if necessary */
  </style>
  