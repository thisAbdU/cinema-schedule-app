<template>
    <div class="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <!-- Animated background lines -->
      <div class="absolute inset-0">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <!-- Animated lines -->
      <div v-for="i in 5" :key="i" class="absolute inset-0">
        <div class="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-gray-500 to-transparent animate-line"
             :style="{ left: `${20 * i}%`, animationDelay: `${i * 0.5}s` }"></div>
      </div>
  
      <div class="rate-movie-section bg-black bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4 relative z-10">
        <h2 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4766] to-[#5C28D4] text-center">Rate This Movie</h2>
  
        <!-- Selected Movie Display -->
        <div class="mb-8 text-center">
          <h3 class="text-2xl font-semibold text-white">{{ selectedMovie.title }}</h3>
          <p class="text-gray-400">{{ selectedMovie.genre }} | {{ selectedMovie.year }}</p>
        </div>
  
        <div class="flex flex-col items-center mb-6">
          <label class="mb-2 text-lg text-gray-300">Your Rating:</label>
          <div class="star-rating text-3xl">
            <span v-for="star in 5" :key="star" @click="setRating(star)" @mouseover="hoverRating = star" @mouseleave="hoverRating = 0" class="cursor-pointer">
              <i :class="[
                star <= (hoverRating || rating) ? 'text-yellow-500 fas fa-star' : 'text-gray-500 far fa-star',
                'transition-all duration-200 hover:scale-110'
              ]"></i>
            </span>
          </div>
          <p class="mt-2 text-gray-400">{{ ratingText }}</p>
        </div>
  
        <textarea v-model="comment" rows="4" class="w-full p-4 rounded-md bg-gray-800 text-white mb-6 focus:outline-none focus:ring-2 focus:ring-[#FF4766] transition-all duration-300" placeholder="Write your review..."></textarea>
  
        <button @click="submitRating" class="w-full bg-gradient-to-r from-[#FF4766] to-[#5C28D4] text-white font-bold py-3 rounded-lg hover:from-[#FF5F7E] hover:to-[#7440E7] transition duration-300 ease-in-out transform hover:-translate-y-1 mb-8">
          Submit Rating
        </button>
  
        <!-- Comments Section -->
        <div class="mt-8">
          <h3 class="text-2xl font-semibold mb-4 text-white">User Reviews</h3>
          <div v-if="comments.length === 0" class="text-gray-400 text-center">
            No reviews yet. Be the first to comment!
          </div>
          <div v-else class="space-y-4">
            <div v-for="(comment, index) in comments" :key="index" class="bg-gray-800 p-4 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <img :src="comment.avatar" alt="User Avatar" class="w-10 h-10 rounded-full mr-3">
                  <span class="font-semibold text-white">{{ comment.username }}</span>
                </div>
                <div class="text-yellow-500">
                  <i v-for="star in 5" :key="star" :class="star <= comment.rating ? 'fas fa-star' : 'far fa-star'"></i>
                </div>
              </div>
              <p class="text-gray-300">{{ comment.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const rating = ref(0)
  const hoverRating = ref(0)
  const comment = ref('')
  
  // Example movie data - replace with actual data
  const selectedMovie = ref({
    title: 'Inception',
    genre: 'Sci-Fi',
    year: '2010'
  })
  
  const comments = ref([
    { username: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1', rating: 5, text: 'Mind-bending and visually stunning!' },
    { username: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2', rating: 4, text: 'Great concept, but a bit confusing at times.' },
  ])
  
  const setRating = (stars) => {
    rating.value = stars
  }
  
  const ratingText = computed(() => {
    const texts = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent']
    return texts[rating.value]
  })
  
  const submitRating = () => {
    if (rating.value === 0) {
      alert('Please select a rating!')
      return
    }
  
    // Submit the rating and comment to your backend (API call)
    console.log('Rating submitted:', rating.value, 'Comment:', comment.value)
    
    // Add the new comment to the list (in a real app, this would come from the server)
    comments.value.unshift({
      username: 'You',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: rating.value,
      text: comment.value
    })
  
    // Reset the form
    rating.value = 0
    comment.value = ''
  
    alert('Thank you for your rating!')
  }
  </script>
  
  <style scoped>
  .rate-movie-section {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .animate-line {
    animation: moveLine 10s linear infinite;
  }
  
  @keyframes moveLine {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  </style>