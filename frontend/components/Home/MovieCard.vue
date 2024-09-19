<template>
  <section class="p-4 bg-transparent text-white">
    <div class="container mx-auto">
      <!-- Carousel Container -->
      <div class="relative">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden">
          <div class="flex space-x-4 overflow-x-auto carousel" ref="scrollContainer">
            <!-- Movie Card -->
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/Kassahun Fiseha                      (ካሳሁን ፍሰሃ).jpeg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/9b9823d684e3365967cfc0c86a405eed.jpg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/gize-rebash.jpeg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/lijes.jpeg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/rebuni-cover.jpg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/sost-mazen-cover.jpg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/taza.jpg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/ህዳር.jpeg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <div class="w-1/6 min-w-[200px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card">
              <img src="../../assets/img/እንደ ሀገር - Ende Hager.jpeg" alt="Movie Poster" class="w-full h-130 object-cover rounded-lg mb-2">
            </div>
            <!-- ... -->
          </div>
        </div>
        <!-- Carousel Controls -->
        <button @click="scrollLeft" class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button @click="scrollRight" class="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollContainer = ref(null);

const scrollLeft = () => {
  console.log('Scroll Left');
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  console.log('Scroll Right');
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
  }
};

const autoScroll = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
  }
};

onMounted(() => {
  const interval = setInterval(autoScroll, 5000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
.carousel {
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* For Firefox */
}

.carousel::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Edge */
}

.carousel > div {
  scroll-snap-align: start;
}

.carousel-container {
  display: flex;
  overflow-x: auto;
}

.carousel-card {
  min-width: 200px;
  flex: 1 0 auto;
}

.carousel-button {
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.movie-card {
  transition: transform 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.1);
  z-index: 10;
}
</style>