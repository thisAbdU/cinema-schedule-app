<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden pb-34">

    <!-- Background Animation -->
    <div class="absolute inset-0">
      <div class="line-animation"></div>
      <div class="background-elements">
        <div v-for="i in 3" :key="i" :class="`shape shape-${i}`"></div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <!-- Left Side - Heading and Message -->
      <div class="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Welcome Back!
        </h1>
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6 inline-block">
          <div class="flex items-center">
            <svg class="w-8 h-8 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <p class="text-lg font-semibold text-white">Sign in to your account and start booking your tickets!</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Sign-in Form -->
      <div class="w-full md:w-1/2 max-w-md">
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700">
          <h2 class="text-3xl font-bold mb-6 text-white">Sign In</h2>

          <form @submit.prevent="onSubmit">
            <div class="space-y-4">
              <div>
                <label for="username" class="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <input
                  type="username"
                  id="username"
                  v-model="username"
                  placeholder="Enter your username"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</p>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  placeholder="Enter your password"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
              </div>
            </div>

            <button
              type="submit"
              class="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign In
            </button>
          </form>

          <div class="mt-6 flex items-center justify-center">
            <span class="bg-gray-700 px-4 text-sm text-gray-400">or</span>
            <hr class="w-full border-t border-gray-700" />
          </div>

          <div class="mt-6 space-y-4">
            <button
              v-for="provider in socialProviders"
              :key="provider.name"
              :class="`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${provider.color}-500 ${provider.bgClass} ${provider.textClass}`"
            >
              <component :is="provider.icon" class="w-5 h-5" />
              <span>Sign in with {{ provider.name }}</span>
            </button>
          </div>

          <div class="mt-6 flex justify-between text-sm">
            <a href="/forgot-password" class="text-pink-500 hover:underline">Forgot Password?</a>
            <a href="/support" class="text-pink-500 hover:underline">Customer Support</a>
          </div>

          <div class="mt-6 text-center text-sm">
            <p class="text-gray-400">
              Don't have an account?
              <a href="/signup" class="text-pink-500 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toTypedSchema } from '@vee-validate/zod';
import { object, string } from 'zod';
import { useForm, useField } from 'vee-validate';
import { useSignin } from '@/composables/useLogin';
import { useRouter } from 'vue-router';

const router = useRouter();

// Validation schema
const validationSchema = toTypedSchema(
  object({
    username: string().min(1, { message: "Username is required" }),
    password: string().min(6, { message: "Password must be at least 6 characters" }),
  })
);

// Form state
const { handleSubmit, errors } = useForm({ validationSchema });

const { value: username } = useField('username');
const { value: password } = useField('password');

// Use the signin composable
const { signin, loading, error: signinError } = useSignin();

// Function to handle the form submission
const onSubmit = handleSubmit(async (values) => {
  try {
    const result = await signin(values.username, values.password);
    console.log('Sign in success:', result.message);
    // Redirect to dashboard or home page after successful login
    router.push('/movies');
  } catch (error) {
    // The error is already handled and stored in signinError
    console.error('Sign in failed');
  }
});
</script>

<style scoped>
.line-animation {
  @apply absolute inset-0 pointer-events-none z-10;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.03) 2px,
    rgba(255, 255, 255, 0.03) 4px
  );
  animation: lineMove 20s linear infinite;
}

@keyframes lineMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

.background-elements {
  @apply absolute inset-0 overflow-hidden pointer-events-none;
}

.shape {
  @apply absolute w-36 h-36 bg-white bg-opacity-5 rounded-full;
  animation: moveShape 20s infinite ease-in-out;
}

.shape-1 { top: 20%; left: 15%; animation-duration: 14s; }
.shape-2 { top: 70%; left: 50%; animation-duration: 18s; }
.shape-3 { top: 50%; left: 80%; animation-duration: 12s; }

@keyframes moveShape {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(100px, 50px); }
}
</style>