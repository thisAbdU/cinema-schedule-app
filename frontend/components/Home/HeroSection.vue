<template>
  <section class="relative h-screen flex justify-center items-center">
    <!-- Background Image with Animation -->
    <img src="@/assets/img/backgrou.jpg" alt="Background Image" class="absolute inset-0 object-cover w-full h-full -z-10 animate-zoom-in">

    <!-- Black Overlay with 50% opacity -->
    <div class="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

    <!-- Hero content -->
    <div class="relative z-10 text-center px-4">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl">
        <span class="text-white">Discover Your</span>
        <span class="block bg-clip-text text-transparent bg-gradient-to-r from-[#F7F7F7] to-[#AF1F53]">
          Next Favorite Movie
        </span>
      </h1>
      <p class="text-lg font-normal text-white lg:text-xl">
        Explore our movie schedule and find the latest films in theaters. <br>
        Easily buy tickets online, reserve your seats, and skip the lines.<br>
        Enjoy a seamless movie experience with reviews, ratings, and more!
      </p>
      <!-- Button Container -->
      <div class="mt-6 flex justify-center space-x-4">
      <!-- First Button -->
    <button type="button" class="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-transparent border border-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transition-colors duration-300 ease-in-out">
    <span class="absolute inset-0 flex items-center justify-center bg-transparent rounded-md group-hover:bg-opacity-0"></span>
    <span class="relative font-medium text-lg">Discover More</span>
    </button>
        <!-- Second Button -->
    <button type="button" class="relative inline-flex items-center justify-center p-3 mb-2 me-2 overflow-hidden text-sm font-bold text-white rounded-lg group bg-transparent border border-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transition-colors duration-300 ease-in-out">
    <span class="absolute inset-0 flex items-center justify-center bg-opacity-0 rounded-md group-hover:bg-transparent"></span>
    <span class="relative font-bold text-xl">Buy Ticket</span>
    </button>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}

.animate-zoom-in {
  animation: zoomIn 20s infinite alternate;
}
</style>
