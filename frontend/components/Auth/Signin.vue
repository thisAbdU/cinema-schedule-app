<template>
    <div class="relative flex min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-700 overflow-hidden">
      <!-- Moving thin lines animation -->
      <div class="line-animation"></div>
  
      <!-- Background movie-like moving elements -->
      <!-- Background shapes -->
      <div class="background-elements">
        <div class="shape shape-one"></div>
        <div class="shape shape-two"></div>
        <div class="shape shape-three"></div>
      </div>
  
  
      <!-- Left Side - Heading and Message -->
      <div class="z-10 w-full md:w-1/2 flex flex-col justify-center items-center text-white p-8">
        <h1 class="text-6xl font-bold mb-6 text-left mx-10 bg-gradient-to-r from-[#F5F2F3] to-[#B53161] text-transparent bg-clip-text">
          Welcome Back!
        </h1>
        <div class="bg-black border-2 border-white rounded-lg p-6 w-2/3 text-left mx-10 flex items-center">
        <!-- SVG Icon -->
        <svg class="w-8 h-8 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h6l3-7 3 7h6l-3 8H6l-3-8z"></path>
        </svg>
        <!-- Text -->
        <p class="text-lg font-semibold text-white">Sign in to your account and start booking your tickets!</p>
        </div>
      </div>
  
      <!-- Right Side - Sign-in Form -->
      <div class="z-10 w-full md:w-1/2 flex justify-center items-center p-8">
        <div class="bg-white bg-opacity-20 p-12 rounded-xl shadow-lg w-full max-w-md border border-gray-400">
          <h2 class="text-4xl font-bold mb-6 text-white text-left">Sign In</h2>
  
          <!-- Sign-in Form -->
          <form @submit.prevent="handleSubmit">
            <!-- Email Input -->
            <div class="mb-4">
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full p-2 border border-gray-400 rounded-lg bg-gray-800 bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-300"
                placeholder="Email"
                required
              />
            </div>
  
            <!-- Password Input -->
            <div class="mb-4">
              <input
                type="password"
                id="password"
                v-model="form.password"
                class="w-full p-2 border border-gray-400 rounded-lg bg-gray-800 bg-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-300"
                placeholder="Password"
                required
              />
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-custom-gradient text-white font-bold py-2.5 px-4 rounded-lg hover:bg-custom-gradient-hover transition">
              Sign In
            </button>
          </form>
  
          <!-- Divider Line -->
          <div class="my-6 flex items-center justify-center">
            <hr class="w-full border-gray-400"/>
            <span class="px-2 text-white">or</span>
            <hr class="w-full border-gray-400"/>
          </div>
  
          <!-- Social Sign-in Options -->
          <div class="flex flex-col space-y-4">
            <!-- Google Sign-in -->
            <button
              class="w-full bg-white text-gray-800 font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition"
            >
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Icon" class="w-5 h-5"/>
              <span>Sign In with Google</span>
            </button>
  
            <!-- Facebook Sign-in -->
            <button
              class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
            >
              <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook Icon" class="w-5 h-5"/>
              <span>Sign In with Facebook</span>
            </button>
          </div>
  
          <!-- Additional Links -->
          <div class="mt-6 flex flex-row items-center space-x-4 mx-6">
            <p class="text-white">
              <a href="/forgot-password" class="text-red-500 hover:underline">Forgot Password?</a>
            </p>
            <p class="text-white">
                |
            </p>
            <p class="text-white">
              <a href="/support" class="text-red-500 hover:underline">Customer Support</a>
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
          password: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        alert('Sign in form submitted!');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Cinematic moving lines */
  .line-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px);
    animation: lineMove 5s linear ;
  }
  
  @keyframes lineMove {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-200%);
    }
  }
  
  /* Movie-like background elements */
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
    /* Background shapes */
    .background-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }
  
  .shape {
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: moveShape 10s infinite ease-in-out;
  }
  
  .shape-one {
    top: 20%;
    left: 15%;
    animation-duration: 14s;
  }
  
  .shape-two {
    top: 70%;
    left: 50%;
    animation-duration: 18s;
  }
  
  .shape-three {
    top: 50%;
    left: 80%;
    animation-duration: 12s;
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
