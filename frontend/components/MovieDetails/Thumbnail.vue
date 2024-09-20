<template>
    <div class="flex justify-center items-center bg-gray-100 rounded-lg shadow-lg w-full max-w-5xl mx-auto">
      <!-- Thumbnail Image -->
      <div class="flex-shrink-0 w-full h-64"> 
        <img
          :src="thumbnail"
          alt="Movie Thumbnail"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </template>
  
  //TODO: replace the thumbnail with the real movie thumbnail
  <script>
  export default {
    data() {
      return {
        thumbnail: 'https://w0.peakpx.com/wallpaper/875/148/HD-wallpaper-movie-arrival-amy-adams-jeremy-renner.jpg', // Example thumbnail
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  