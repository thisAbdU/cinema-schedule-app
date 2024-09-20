<template>
    <div class="relative flex min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 overflow-hidden">
      <!-- Moving thin lines animation -->
      <div class="line-animation"></div>
  
      <!-- Background movie-like moving elements -->
      <div class="movie-elements">
        <div class="movie-element one"></div>
        <div class="movie-element two"></div>
        <div class="movie-element three"></div>
      </div>
  
      <!-- Left Side - Heading and Message -->
      <div class="z-10 w-full md:w-1/2 flex flex-col justify-center items-center text-white p-8">
        <h1 class="text-5xl font-bold mb-6 text-left mx-10 bg-gradient-to-r from-[#F5F2F3] to-[#B53161] text-transparent bg-clip-text">
          Reset Your Password
        </h1>
        <div class="bg-black border-2 border-white rounded-lg p-6 w-2/3 text-left mx-10 flex items-center">
          <!-- SVG Icon -->
          <svg class="w-8 h-8 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h6l3-7 3 7h6l-3 8H6l-3-8z"></path>
          </svg>
          <!-- Text -->
          <p class="text-lg font-semibold text-white">Please enter your email address to reset your password.</p>
        </div>
      </div>
  
      <!-- Right Side - Forgot Password Form -->
      <div class="z-10 w-full md:w-1/2 flex justify-center items-center p-8">
        <div class="bg-white bg-opacity-20 p-12 rounded-xl shadow-lg w-full max-w-md border border-gray-400">
          <h2 class="text-4xl font-bold mb-6 text-white text-left">Forgot Password</h2>
  
          <!-- Forgot Password Form -->
          <form @submit.prevent="handleSubmit">
            <!-- Email Input -->
            <div class="mb-4">
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full p-2 border border-gray-400 rounded-lg bg-gray-800 bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-300"
                placeholder="Email Address"
                required
              />
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-custom-gradient text-white font-bold py-2.5 px-4 rounded-lg hover:bg-custom-gradient-hover transition">
              Send Reset Link
            </button>
          </form>
  
          <!-- Back to Sign In -->
          <div class="mt-6 text-center">
            <p class="text-white">
              Remember your password? <a href="/sign-in" class="text-red-500 hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          email: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        alert('Password reset link has been sent to your email!');
        // Here, you would typically handle the API call to send the reset link
      },
    },
  };
  </script>
  
  <style scoped>
  /* Reuse the same style for line animations */
  .line-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px);
    animation: lineMove 5s linear;
  }
  
  @keyframes lineMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-200%);
    }
  }
  
  /* Reuse the same style for movie elements */
  .movie-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }
  
  .movie-element {
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: moveElement 10s infinite ease-in-out;
  }
  
  .movie-element.one {
    top: 10%;
    left: 20%;
    animation-duration: 12s;
    animation-delay: -2s;
  }
  
  .movie-element.two {
    top: 50%;
    left: 60%;
    animation-duration: 15s;
    animation-delay: -3s;
  }
  
  .movie-element.three {
    top: 80%;
    left: 10%;
    animation-duration: 18s;
    animation-delay: -4s;
  }
  
  @keyframes moveElement {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(100px, 50px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  </style>
  