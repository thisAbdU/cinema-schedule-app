<template>
  <section class="p-4 bg-transparent text-white">
    <div class="container mx-auto">
      <!-- Carousel Container -->
      <div class="relative">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden">
          <div class="flex space-x-4 overflow-x-auto carousel" ref="scrollContainer">
            <!-- Movie Card -->
            <div 
              v-for="(movie, index) in movies" 
              :key="index" 
              class="w-1/7 min-w-[150px] flex-shrink-0 bg-gray-900 rounded-lg p-0 movie-card group"
            >
              <img 
                :src="getImageUrl(movie.image)"
                :alt="movie.title" 
                class="w-full h-[225px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:shadow-lg"
              >
            </div>
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

// TODO: Replace with real movie data
const movies = [
  { title: "Kassahun Fiseha", image: "@/assets/img/Kassahun Fiseha                      (ካሳሁን ፍሰሃ).jpeg" },
  { title: "Movie 2", image: "@/assets/img/9b9823d684e3365967cfc0c86a405eed.jpg" },
  { title: "Gize Rebash", image: "/img/gize-rebash.jpeg" },
  { title: "Lijes", image: "../../assets/img/lijes.jpeg" },
  { title: "Rebuni", image: "../../assets/img/rebuni-cover.jpg" },
  { title: "Sost Mazen", image: "../../assets/img/sost-mazen-cover.jpg" },
  { title: "Taza", image: "../../assets/img/taza.jpg" },
  { title: "Hidar", image: "../../assets/img/ህዳር.jpeg" },
  { title: "Ende Hager", image: "../../assets/img/እንደ ሀገር - Ende Hager.jpeg" },
  { title: "Sost Mazen", image: "../../assets/img/sost-mazen-cover.jpg" },
  { title: "Taza", image: "../../assets/img/taza.jpg" },
  { title: "Hidar", image: "../../assets/img/ህዳር.jpeg" },
  { title: "Ende Hager", image: "../../assets/img/እንደ ሀገር - Ende Hager.jpeg" },
];

function getImageUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' });
  }
};

const autoScroll = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' });
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
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.carousel::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

.carousel > div {
  scroll-snap-align: start;
}

.movie-card {
  transition: all 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.2);
  z-index: 10;
}

.movie-card:not(:hover) {
  transform: scale(0.95);
}

.movie-card:hover ~ .movie-card {
  transform: translateX(20px);
}
</style>