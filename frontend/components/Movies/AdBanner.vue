<template>
  <div class="relative w-full md:w-3/4 mx-auto mt-0 mb-8 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
    <div class="relative h-48 md:h-64 lg:h-80 overflow-hidden">
      <transition-group name="fade" tag="div">
        <div
          v-for="(ad, index) in ads"
          :key="ad.id"
          v-show="currentIndex === index"
          class="absolute inset-0 w-full h-full"
        >
          <a :href="ad.link" target="_blank" rel="noopener noreferrer" class="block w-full h-full">
            <img
              :src="ad.image"
              :alt="ad.alt"
              class="w-full h-full object-cover transition-opacity duration-500"
              :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h2 class="text-xl md:text-2xl font-bold text-white mb-2">{{ ad.title }}</h2>
              <p class="text-sm md:text-base text-gray-200">{{ ad.description }}</p>
            </div>
          </a>
        </div>
      </transition-group>
    </div>

    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 bottom-4 left-1/2 transform -translate-x-1/2">
      <button
        v-for="(ad, index) in ads"
        :key="ad.id"
        @click="setCurrentIndex(index)"
        :aria-current="currentIndex === index"
        :aria-label="`Slide ${index + 1}`"
        class="w-3 h-3 rounded-full bg-white/50 transition-colors duration-300"
        :class="{'bg-white': currentIndex === index}"
      ></button>
    </div>

    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="prevSlide"
    >
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:ring-opacity-70 transition-all duration-300">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="nextSlide"
    >
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:ring-opacity-70 transition-all duration-300">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const intervalId = ref(null)

const ads = [
  {
    id: 1,
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/77d4ae41745389.57b2e4780fbb2.png",
    link: "https://www.advertiser1.com",
    alt: "Summer Blockbuster Festival",
    title: "Summer Blockbuster Festival",
    description: "Experience the biggest movies of the year on the big screen!"
  },
  {
    id: 2,
    image: "https://media.potatopro.com/sun-chips-809.jpg?width=809",
    link: "https://www.advertiser2.com",
    alt: "Exclusive Snack Deals",
    title: "Exclusive Snack Deals",
    description: "Enjoy your favorite movie snacks at unbeatable prices!"
  },
  {
    id: 3,
    image: "https://assets.bonappetit.com/photos/642b4640b1072d0f16190891/16:9/w_2560%2Cc_limit/20230324-HIGHLY-REC-20745.jpg",
    link: "https://www.advertiser3.com",
    alt: "VIP Movie Experience",
    title: "VIP Movie Experience",
    description: "Upgrade your cinema visit with our luxurious VIP packages"
  },
]

const autoRotate = () => {
  intervalId.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % ads.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? ads.length - 1 : currentIndex.value - 1
}

const setCurrentIndex = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  autoRotate()
})

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>