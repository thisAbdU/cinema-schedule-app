<template>
  <div class="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
    <h2 class="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
      Filter by Genre
    </h2>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="genre in genres"
        :key="genre"
        @click="toggleGenre(genre)"
        :class="{
          'bg-gradient-to-r from-pink-500 to-orange-400 text-white': isSelected(genre),
          'bg-gray-800 text-gray-300': !isSelected(genre)
        }"
        class="px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        {{ genre }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi']
const selectedGenres = ref([])

const movies = [
  { id: 1, title: 'Movie A', genre: 'Action' },
  { id: 2, title: 'Movie B', genre: 'Comedy' },
  { id: 3, title: 'Movie C', genre: 'Drama' },
  { id: 4, title: 'Movie D', genre: 'Horror' },
  { id: 5, title: 'Movie E', genre: 'Sci-Fi' },
  { id: 6, title: 'Movie F', genre: 'Action' }
]

const filteredMovies = computed(() => {
  if (selectedGenres.value.length === 0) {
    return movies
  }
  return movies.filter(movie => selectedGenres.value.includes(movie.genre))
})

const toggleGenre = (genre) => {
  const index = selectedGenres.value.indexOf(genre)
  if (index === -1) {
    selectedGenres.value.push(genre)
  } else {
    selectedGenres.value.splice(index, 1)
  }
}

const isSelected = (genre) => {
  return selectedGenres.value.includes(genre)
}
</script>