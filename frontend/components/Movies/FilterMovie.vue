<template>
<div class="p-6">
    <!-- Genre Filter Tags -->
    <div class="mb-4">
    <div class="flex flex-wrap space-x-2">
        <button
        v-for="genre in genres"
        :key="genre"
        @click="toggleGenre(genre)"
        :class="{
           'bg-[#6B2BC9] text-white': isSelected(genre),
           'bg-[#11212E] text-[#CBD5E1]': !isSelected(genre)
        }"
        class="px-4 py-2 rounded-md font-medium"
        >
        {{ genre }}
        </button>
    </div>
    </div>
</div>
</template>


<script>
export default {
  data() {
    return {
      genres: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'],
      selectedGenres: [],
      movies: [
        { id: 1, title: 'Movie A', genre: 'Action' },
        { id: 2, title: 'Movie B', genre: 'Comedy' },
        { id: 3, title: 'Movie C', genre: 'Drama' },
        { id: 4, title: 'Movie D', genre: 'Horror' },
        { id: 5, title: 'Movie E', genre: 'Sci-Fi' },
        { id: 6, title: 'Movie F', genre: 'Action' }
      ]
    };
  },
  computed: {
    filteredMovies() {
      // If no genre is selected, show all movies
      if (this.selectedGenres.length === 0) {
        return this.movies;
      }

      // Filter movies by selected genres
      return this.movies.filter(movie =>
        this.selectedGenres.includes(movie.genre)
      );
    }
  },
  methods: {
    toggleGenre(genre) {
      // If genre is already selected, remove it; otherwise, add it
      if (this.selectedGenres.includes(genre)) {
        this.selectedGenres = this.selectedGenres.filter(g => g !== genre);
      } else {
        this.selectedGenres.push(genre);
      }
    },
    isSelected(genre) {
      return this.selectedGenres.includes(genre);
    }
  }
};
</script>
  