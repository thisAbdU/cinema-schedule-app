<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0">
      <div class="line-animation"></div>
      <div class="movie-elements">
        <div v-for="i in 3" :key="i" :class="`movie-element element-${i}`"></div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center min-h-screen">
      <!-- Left Side - Heading and Message -->
      <div class="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Roll Out the Red Carpet!
        </h1>
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6 inline-block">
          <div class="flex items-center">
            <svg class="w-8 h-8 mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <p class="text-lg font-semibold text-white">Be the first to catch the show!</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Sign-up Form -->
      <div class="w-full md:w-1/2 max-w-md">
        <div class="bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700">
          <h2 class="text-3xl font-bold mb-6 text-white">Sign Up</h2>

          <form @submit="onSubmit">
            <div class="space-y-4">
                <div class="mb-4">
                <!-- Username Field -->
                <label for="username" class="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p v-if="errors.username" class="text-red-500 text-xs mt-1">{{ errors.username }}</p>
              </div>

              <div class="mb-4">
                <!-- Email Field -->
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
              </div>

              <div class="mb-4">
                <!-- Password Field -->
                <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
              </div>

              <div class="mb-4">
                <!-- Confirm Password Field -->
                <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                <input
                  v-model="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <p v-if="errors.confirmPassword" class="text-red-500 text-xs mt-1">{{ errors.confirmPassword }}</p>
              </div>
      </div>

            <button
              type="submit"
              class="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign Up
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
              <span>Sign up with {{ provider.name }}</span>
            </button>
          </div>

          <div class="mt-6 text-center text-sm">
            <p class="text-gray-400">
              Already registered?
              <a href="/auth/signin" class="text-pink-500 hover:underline">Sign in</a>
            </p>
            <p class="mt-2">
              <a href="/#contact-section" class="text-pink-500 hover:underline">Customer Support</a>
            </p>

            <p class="mb-20">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CircleUser, FacebookIcon } from 'lucide-vue-next';
// import useSignUp from '~/composables/useRegister';
// import useUser from '~/composables/useNewUser';
import { toTypedSchema } from '@vee-validate/zod';
import { object, string } from 'zod';

// Validation schema
const validationSchema = toTypedSchema(
  object({
    username: string().min(4, {message : "needs to be above 3 characters"}).max(20, {message : "needs to be below 20 characters"}).regex(/^[A-Za-z]+$/, 'Username must only contain characters'),
    email: string().min(1, {message : "Email is required"}).email({message: "Invalid email"}),
    password: string().min(5, {message : "Must be above 5 characters"}),
    confirmPassword: string().refine((val, ctx) => val === ctx.parent.password, {message: 'Passwords must match'}),
  }),
);

// Social providers for buttons
const socialProviders = [
  { name: 'Google', icon: CircleUser, bgClass: 'bg-white', textClass: 'text-gray-800', color: 'gray' },
  { name: 'Facebook', icon: FacebookIcon, bgClass: 'bg-blue-600', textClass: 'text-white', color: 'blue' },
];

// Form state
const {handleSubmit, errors} = useForm({validationSchema});

const { value: username } = useField('username');
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: confirmPassword } = useField('confirmPassword');

// Composable for signup
// const { executeSignUp } = useSignUp();

// Composable for setting user
// const { setUser } = useUser();

// Form submission handler
const onSubmit = handleSubmit((values) => {
  alert("Submitted");
  console.log(values);
  console.log("Errors", errors.value);

// const user = {
//     username: values.username,
//     email: values.email,
//     password: values.password,
//   };

//   console.log("Submitted values", values);  // Ensure the form values are populated correctly

//   try {
//     const response = await executeSignUp(user);  // Call signup composable
//     setUser(response);  // Set user data
//     router.replace({ path: '/auth/otp' });  // Redirect to OTP page
//     console.log("Signup successful", response); // Log the response or handle success
//   } catch (error) {
//     console.error("Signup error", error);  // Log the error
//   }
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

.movie-elements {
  @apply absolute inset-0 overflow-hidden pointer-events-none;
}

.movie-element {
  @apply absolute w-12 h-12 bg-white bg-opacity-5 rounded-full;
  animation: moveElement 20s infinite ease-in-out;
}

.element-1 { top: 10%; left: 20%; animation-duration: 15s; animation-delay: -2s; }
.element-2 { top: 50%; left: 60%; animation-duration: 18s; animation-delay: -5s; }
.element-3 { top: 80%; left: 10%; animation-duration: 20s; animation-delay: -8s; }

@keyframes moveElement {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(100px, 50px); }
}
</style>
