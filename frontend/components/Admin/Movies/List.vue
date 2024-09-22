<template>
    <div class="w-full max-w-4xl mx-auto p-4">
      <!-- Title -->
      <div class="mb-4">
        <h2 class="text-2xl font-bold text-white">Movies</h2>
      </div>
  
      <!-- Table -->
      <div class="bg-[#21252D] rounded-lg shadow-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="text-white bg-gradient-to-r from-blue-500 to-pink-500">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Movie Title</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Airing Time</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Genre</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date Added</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Thumbnail</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-[#21252D] divide-y divide-gray-200 text-gray-200">
            <tr v-for="movie in movies" :key="movie.id">
              <td class="px-6 py-4 text-sm font-medium">{{ movie.title }}</td>
              <td class="px-6 py-4 text-sm">{{ movie.airingTime }}</td>
              <td class="px-6 py-4 text-sm">{{ movie.genre }}</td>
              <td class="px-6 py-4 text-sm">{{ movie.dateAdded }}</td>
              <td class="px-6 py-4 text-sm">
                <img :src="movie.thumbnail" :alt="movie.title" class="w-16 h-16 object-cover rounded-md">
              </td>
              <td class="px-6 py-4 text-sm flex flex-col space-y-2">
                <button class="bg-custom-gradient text-white px-4 py-2 rounded-lg">Edit</button>
                <button class="border border-custom-gradient text-gradient px-4 py-2 rounded-lg">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movies: [], // Array to store movie data
      };
    },
    async created() {
      try {
        const response = await axios.get('/api/movies'); // Replace with your backend API endpoint
        this.movies = response.data;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .text-gradient {
    background: linear-gradient(to right, #007997, #7C466C, #FF4081);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  </style>
  
  