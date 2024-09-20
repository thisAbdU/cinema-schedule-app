<template>
    <div class="relative flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <!-- Background shapes -->
      <div class="background-elements">
        <div class="shape shape-one"></div>
        <div class="shape shape-two"></div>
        <div class="shape shape-three"></div>
      </div>
  
      <!-- OTP Page Content -->
      <div class="z-10 w-full md:w-1/2 flex flex-col justify-center items-center text-white p-8">
        <h1 class="text-6xl font-bold mb-6 text-left mx-10 text-gray-200">Enter OTP</h1>
        <p class="text-lg text-left mx-10 mb-8 text-gray-400">Please enter the 5-digit code we sent to your email.</p>
  
        <!-- OTP Form -->
        <div :class="formClass" class="bg-gray-800 bg-opacity-60 border border-gray-600 p-10 rounded-lg shadow-lg w-full max-w-lg">
          <form @submit.prevent="verifyOTP">
            <!-- OTP Inputs (5-digit) -->
            <div class="flex justify-between mb-8">
              <input
                v-for="(digit, index) in otp"
                :key="index"
                type="text"
                maxlength="1"
                class="otp-input"
                v-model="otp[index]"
                @input="moveFocus(index)"
                :class="{'border-green-500': otpValid, 'border-red-500': !otpValid && otpError}"
                required
              />
            </div>
  
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-custom-gradient text-white font-bold py-3 px-4 rounded-lg hover:bg-custom-gradient-hover transition">
              Verify OTP
            </button>
  
            <!-- Error Message -->
            <p v-if="otpError" class="text-red-500 mt-4 text-center">Invalid OTP. Please try again.</p>
          </form>
  
          <!-- Back to Sign In -->
          <div class="mt-6 text-center">
            <router-link to="/signin" class="text-red-500 hover:underline">Back to Sign In</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otp: ['', '', '', '', ''], // 5-digit OTP input fields
        otpValid: false, // Flag for OTP validation success
        otpError: false, // Flag for OTP error
      };
    },
    computed: {
      // Dynamically set the form border color based on the validation status
      formClass() {
        return this.otpValid
          ? 'border-green-500'
          : this.otpError
          ? 'border-red-500'
          : '';
      },
    },
    methods: {
      async verifyOTP() {
        const enteredOTP = this.otp.join(''); // Join the 5 digits into one string
        const isOTPValid = await this.fakeOTPVerification(enteredOTP); // Check if OTP is correct
  
        if (isOTPValid) {
          this.otpValid = true;
          this.otpError = false;
          // Redirect to dashboard or desired page after OTP is verified
          setTimeout(() => {
            this.$router.push('/dashboard'); // Example: Redirect to dashboard
          }, 1000);
        } else {
          this.otpValid = false;
          this.otpError = true; // Set error flag
        }
      },
      // Simulate OTP verification process
      fakeOTPVerification(otp) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(otp === '12345'); // Example OTP is '12345'
          }, 1000);
        });
      },
      // Move focus to the next input field automatically
      moveFocus(index) {
        if (this.otp[index] && index < 4) {
          this.$refs[`otp${index + 1}`][0].focus();
        }
      },
    },
  };
  </script>
  
  <style scoped>
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
  
  @keyframes moveShape {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(100px, -100px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  
  /* OTP Input styling */
  .otp-input {
    width: 60px;
    height: 60px;
    background-color: #1f2937; /* Tailwind's gray-900 */
    color: white;
    font-size: 24px;
    text-align: center;
    border: 2px solid #4b5563; /* Tailwind's gray-600 */
    border-radius: 8px;
    transition: border-color 0.2s ease;
  }
  
  .otp-input:focus {
    outline: none;
    border-color: #f87171; /* Tailwind's red-400 for focus */
  }
  </style>
  