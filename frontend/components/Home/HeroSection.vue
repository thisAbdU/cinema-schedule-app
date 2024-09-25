<template>
  <div class="min-h-screen bg-gray-900">
    <section class="relative h-screen">
      <!-- Background Image -->
      <div class="absolute inset-0 h-full">
        <img
          src="https://img.freepik.com/premium-photo/dark-movie-theatre-interior_847423-3360.jpg"
          alt="Movie Theater"
          class="w-full h-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <!-- Animated Lines -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 3" :key="i" 
             :class="`absolute h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-move-line-${i}`">
        </div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl max-w-4xl">
          <span class="text-white">Discover Your</span>
          <span class="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
            Next Favorite Movie
          </span>
        </h1>
        <p class="text-lg font-normal text-gray-300 lg:text-xl max-w-2xl mb-8">
          Explore our movie schedule and find the latest films in theaters.
          Easily buy tickets online, reserve your seats, and skip the lines.
          Enjoy a seamless movie experience with reviews, ratings, and more!
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="px-6 py-3 text-lg font-medium text-white bg-transparent border border-white rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:border-transparent transition-all duration-300">
            Discover More
          </button>
          <button class="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg hover:from-pink-600 hover:to-orange-500 transition-all duration-300">
            Buy Ticket
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
@keyframes moveLineDiagonal1 {
  0% { transform: translate(-100%, -100%) rotate(45deg); }
  100% { transform: translate(100%, 100%) rotate(45deg); }
}

@keyframes moveLineDiagonal2 {
  0% { transform: translate(-100%, 0%) rotate(-45deg); }
  100% { transform: translate(100%, 0%) rotate(-45deg); }
}

@keyframes moveLineDiagonal3 {
  0% { transform: translate(0%, -100%) rotate(0deg); }
  100% { transform: translate(0%, 100%) rotate(0deg); }
}

.animate-move-line-1 {
  animation: moveLineDiagonal1 15s linear infinite;
  top: 0;
  left: -50%;
  right: -50%;
}

.animate-move-line-2 {
  animation: moveLineDiagonal2 20s linear infinite;
  top: 50%;
  left: -50%;
  right: -50%;
}

.animate-move-line-3 {
  animation: moveLineDiagonal3 25s linear infinite;
  top: -50%;
  bottom: -50%;
  left: 50%;
  width: 1px !important;
}
</style>