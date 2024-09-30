<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden pb-24">
    <!-- Background Animation -->
    <div class="absolute inset-0">
      <div class="line-animation"></div>
      <div class="background-elements">
        <div v-for="i in 3" :key="i" :class="`shape shape-${i}`"></div>
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <div class="w-full max-w-md">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
          Enter OTP
        </h1>
        <p class="text-lg text-center mb-8 text-gray-300">
          Please enter the 5-digit code we sent to your email.
        </p>

        <div :class="['bg-gray-800 bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-lg border', formBorderClass]">
          <form @submit.prevent="verifyOTP">
            <div class="flex justify-between mb-8">
              <input
                v-for="(digit, index) in otp"
                :key="index"
                type="text"
                inputmode="numeric"
                maxlength="1"
                v-model="otp[index]"
                @input="moveFocus(index)"
                @keydown="handleKeydown($event, index)"
                :ref="el => { if (el) otpRefs[index] = el }"
                class="w-12 h-14 bg-gray-700 border-2 border-gray-600 rounded-md text-center text-white text-2xl focus:outline-none focus:border-pink-500 transition-colors duration-300"
                :class="{ 'border-green-500': otpValid, 'border-red-500': otpError }"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Verify OTP
            </button>

            <p v-if="otpError" class="text-red-500 mt-4 text-center">Invalid OTP. Please try again.</p>
          </form>

          <div class="mt-6 text-center text-sm">
            <p class="text-gray-400">
              Didn't receive the code?
              <a href="#" @click.prevent="resendOTP" class="text-pink-500 hover:underline">Resend OTP</a>
            </p>
          </div>

          <div class="mt-4 text-center text-sm">
            <a href="/signin" class="text-pink-500 hover:underline">Back to Sign In</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const otp = ref(['', '', '', '', ''])
const otpRefs = ref([])
const otpValid = ref(false)
const otpError = ref(false)

const formBorderClass = computed(() => {
  if (otpValid.value) return 'border-green-500'
  if (otpError.value) return 'border-red-500'
  return 'border-gray-700'
})

const verifyOTP = async () => {
  const enteredOTP = otp.value.join('')
  const isOTPValid = await fakeOTPVerification(enteredOTP)

  if (isOTPValid) {
    otpValid.value = true
    otpError.value = false
    setTimeout(() => {
      router.push('/')
    }, 1000)
  } else {
    otpValid.value = false
    otpError.value = true
  }
}

const fakeOTPVerification = (enteredOTP) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(enteredOTP === '12345')
    }, 1000)
  })
}

const moveFocus = (index) => {
  if (otp.value[index] && index < 4) {
    otpRefs.value[index + 1].focus()
  }
}

const handleKeydown = (event, index) => {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    otpRefs.value[index - 1].focus()
  }
}

const resendOTP = () => {
  // TODO: Implement OTP resend logic
  alert('New OTP has been sent to your email.')
}
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