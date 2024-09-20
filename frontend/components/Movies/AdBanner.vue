<template>
 <div id="ad-carousel" class="relative w-3/4 px-4 md:px-8 mx-auto" data-carousel="static">
    <!-- Carousel wrapper with padding -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Ad 1 -->
      <div
        v-for="(ad, index) in ads"
        :key="index"
        :class="{'block': currentIndex === index, 'hidden': currentIndex !== index}"
        class="duration-700 ease-in-out"
        data-carousel-item
      >
        <a :href="ad.link" target="_blank" rel="noopener noreferrer">
          <img
            :src="ad.image"
            :alt="ad.alt"
            class="absolute block w-full h-full object-cover"
            loading="lazy"
          />
        </a>
      </div>
    </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex space-x-3 rtl:space-x-reverse bottom-5 left-1/2 transform -translate-x-1/2">
        <button
          v-for="(ad, index) in ads"
          :key="index"
          @click="setCurrentIndex(index)"
          :aria-current="currentIndex === index"
          :aria-label="'Slide ' + (index + 1)"
          class="w-3 h-3 rounded-full bg-gray-300"
          :class="{'bg-gray-900': currentIndex === index}"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="prevSlide"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            class="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 1L1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="nextSlide"
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            class="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M1 9l4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        ads: [
          {
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/77d4ae41745389.57b2e4780fbb2.png",
            link: "https://www.advertiser1.com",
            alt: "Advertiser 1",
          },
          {
            image: "https://media.potatopro.com/sun-chips-809.jpg?width=809",
            link: "https://www.advertiser2.com",
            alt: "Advertiser 2",
          },
          {
            image: "https://assets.bonappetit.com/photos/642b4640b1072d0f16190891/16:9/w_2560%2Cc_limit/20230324-HIGHLY-REC-20745.jpg",
            link: "https://www.advertiser3.com",
            alt: "Advertiser 3",
          },
        ],
      };
    },
    mounted() {
      this.autoRotate();
    },
    methods: {
      autoRotate() {
        setInterval(() => {
          this.nextSlide();
        }, 5000); // Change slide every 5 seconds
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.ads.length;
      },
      prevSlide() {
        this.currentIndex =
          this.currentIndex === 0 ? this.ads.length - 1 : this.currentIndex - 1;
      },
      setCurrentIndex(index) {
        this.currentIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styling if needed */
  </style>
  