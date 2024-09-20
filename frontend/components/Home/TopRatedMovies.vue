<template>
  <section class="p-6 ">
    <h1 class="text-3xl font-bold text-center text-gray-900 mb-4 bg-gradient-to-r from-[#B99196] to-[#FFFFFF]">
      Top Rated Movies of the Month
    </h1>
    <p class="text-center text-gray-700 mb-8">
      Discover the highest-rated movies this month, handpicked by movie lovers just like you. Don’t miss out on these must-watch films with top reviews and glowing ratings!
    </p>
    <div class="flex flex-wrap justify-center gap-6">
      <div v-for="movie in movies" :key="movie.id" class="relative w-64 bg-white shadow-lg rounded-lg overflow-hidden">
        <img :src="movie.image" alt="Movie Image" class="w-full h-40 object-cover"/>
        <div class="absolute top-2 right-2 bg-yellow-400 text-white text-sm px-2 py-1 rounded">
          {{ movie.rating }}
        </div>
        <div class="p-4">
          <h2 class="text-lg font-semibold">{{ movie.title }}</h2>
          <!-- You can add more details here if needed -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        { id: 1, title: 'Rebuni', image: '../../assets/img/rebuni-cover.jpg', rating: '4.8' },
        { id: 2, title: 'Sost Mazen', image: 'https://via.placeholder.com/400x200', rating: '4.7' },
        { id: 3, title: 'Sike limut', image: 'https://via.placeholder.com/400x200', rating: '4.9' },
        // Add more movie objects here
      ],
    };
  },
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
