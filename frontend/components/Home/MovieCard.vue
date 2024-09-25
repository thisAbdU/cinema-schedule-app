<template>
  <section class="py-16 bg-gray-900 text-white overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Now Showing</h2>
      <!-- Carousel Container -->
      <div class="relative">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden">
          <div class="flex space-x-6 overflow-x-auto carousel" ref="scrollContainer">
            <!-- Movie Card -->
            <div 
              v-for="(movie, index) in movies" 
              :key="index" 
              class="w-64 flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden movie-card group"
            >
              <div class="relative">
                <img 
                  :src="getImageUrl(movie.image)"
                  :alt="movie.title" 
                  class="w-full h-96 object-cover transition-all duration-300 ease-in-out group-hover:opacity-75"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 class="text-lg font-semibold mb-2">{{ movie.title }}</h3>
                  <button class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Carousel Controls -->
        <button @click="scrollLeft" class="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button @click="scrollRight" class="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollContainer = ref(null);

const movies = [
  { title: "Kassahun Fiseha", image: "Kassahun Fiseha (ካሳሁን ፍሰሃ).jpeg" },
  { title: "Gize Rebash", image: "gize-rebash.jpeg" },
  { title: "Lijes", image: "lijes.jpeg" },
  { title: "Rebuni", image: "rebuni-cover.jpg" },
  { title: "Sost Mazen", image: "sost-mazen-cover.jpg" },
  { title: "Taza", image: "taza.jpg" },
  { title: "Hidar", image: "ህዳር.jpeg" },
  { title: "Ende Hager", image: "እንደ ሀገር - Ende Hager.jpeg" },
];

function getImageUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
  }
};

let autoScrollInterval;

const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    if (scrollContainer.value) {
      const isAtEnd = scrollContainer.value.scrollLeft + scrollContainer.value.clientWidth >= scrollContainer.value.scrollWidth;
      if (isAtEnd) {
        scrollContainer.value.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  }, 5000);
};

const stopAutoScroll = () => {
  clearInterval(autoScrollInterval);
};

onMounted(() => {
  startAutoScroll();
});

onUnmounted(() => {
  stopAutoScroll();
});
</script>

<style scoped>
.carousel {
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel > div {
  scroll-snap-align: start;
}

.movie-card {
  transition: all 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.05);
  z-index: 10;
}

.movie-card:not(:hover) {
  transform: scale(0.98);
}
</style>