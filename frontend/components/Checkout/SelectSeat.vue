<template>
  <div class="relative min-h-screen bg-gray-900 overflow-hidden">
    <!-- Background strikes -->
    <div class="absolute inset-0 overflow-hidden">
      <svg class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="strikes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#strikes)" />
      </svg>
    </div>

    <!-- Background shape animations -->
    <div class="absolute inset-20 z-10">
      <div class="absolute w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-30 animate-bounce top-10 left-10"></div>
      <div class="absolute w-64 h-64 bg-gradient-to-r from-green-400 to-purple-500 rounded-full opacity-30 animate-pulse bottom-0 right-0"></div>
    </div>

    <div class="container mx-auto p-4 flex flex-col md:flex-row my-20 relative z-10">
      <div class="cinema-layout flex-1 mb-8 bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" class="w-full h-auto">
          <ellipse cx="400" cy="400" rx="380" ry="20" fill="#555" />
          <text x="400" y="395" text-anchor="middle" fill="white" font-size="14">Screen</text>
          <g v-for="(row, rowIndex) in seatRows" :key="rowIndex">
            <g v-for="(seat, seatIndex) in row" :key="seat.id" @click="selectSeat(seat)">
              <path :d="getSeatPath(rowIndex, seatIndex)" :fill="getSeatColor(seat)" />
              <text 
                :x="100 + seatIndex * 80" 
                :y="60 + rowIndex * 80" 
                text-anchor="middle" 
                fill="white" 
                font-size="12"
              >
                {{ String.fromCharCode(65 + rowIndex) }}{{ seatIndex + 1 }}
              </text>
            </g>
          </g>
        </svg>
      </div>

      <div class="booking-info flex-1 p-4 md:p-8">
        <div class="mb-6 text-white">
          <p class="text-lg font-semibold mb-2">Selected Seats: <span class="font-bold">{{ selectedSeats.length }}</span></p>
          <p class="text-lg font-semibold">Total Price: $<span class="font-bold">{{ totalPrice }}</span></p>
        </div>
        <div class="booking-form p-6 rounded-lg shadow-lg max-w-sm mx-auto md:mx-0 backdrop-filter backdrop-blur-sm border border-gradient bg-gray-800 bg-opacity-50">
          <h2 class="text-2xl font-bold mb-4 text-white">Booking Summary</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="numPeople" class="block text-gray-300 font-medium">Number of People:</label>
              <input
                type="text"
                id="numPeople"
                :value="selectedSeats.length"
                class="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
                readonly
              />
            </div>
            <button
              type="button"
              @click="handleSubmit"
              :disabled="selectedSeats.length === 0"
              class="w-full bg-custom-gradient to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-custom-gradient-hover transition mb-4"
            >
              Book Seats
            </button>
          </form>
        </div>
        <div v-if="error" class="mt-4 p-4 bg-red-900 bg-opacity-50 text-red-200 rounded-lg flex items-center backdrop-filter backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          {{ error }}
        </div>
      </div>
    </div>
    
    <ConfirmationModal 
      :show="showConfirmationModal"
      :selected-seats="selectedSeats"
      @close="closeConfirmationModal"
      @checkout="handleCheckout"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ConfirmationModal from './ConfirmationModal.vue'
import { useRouter } from 'vue-router'
import { useMovieBooking } from '@/composables/useMovieBooking'

const router = useRouter()
const { $locally } = useNuxtApp()

const movieDetails = ref(($locally.getItem('movieDetails')))
const movieDetailsValue = JSON.parse(movieDetails.value)
const movieId = movieDetailsValue.id

const { movie, loading, error, seatRows, selectedSeats, totalPrice, formattedDate, formattedTime, getSeatColor, getSeatPath, selectSeat } = useMovieBooking(movieId)

const showConfirmationModal = ref(false)

const handleSubmit = () => {
  showConfirmationModal.value = true
}

const closeConfirmationModal = () => {
  showConfirmationModal.value = false
}

const handleCheckout = () => {
  // Get the current selected seats and total price from the composable
  const seatsToStore = selectedSeats.value.map(seat => ({
    id: seat.id,
    row: String.fromCharCode(65 + Math.floor((seat.id - 1) / 8)),
    number: (seat.id - 1) % 8 + 1
  }))

  // Create a plain JavaScript object with all the details we want to store
  const bookingDetails = {
    movieId: movieId,
    movieTitle: movieDetailsValue.title,
    selectedSeats: seatsToStore,
    date: formattedDate.value, 
    time: formattedTime.value, 
    totalPrice: totalPrice.value 
  }

  // Store the booking details in local storage
  try {
    $locally.setItem('bookingDetails', JSON.stringify(bookingDetails))
    router.push('/movie/pay')
    showConfirmationModal.value = false
  } catch (error) {
    console.error('Error storing booking details:', error)
    // Handle the error (e.g., show an error message to the user)
  }
}

</script>

<style scoped>
svg {
  cursor: pointer;
}

.border-gradient {
  border-image: linear-gradient(to right, #692ACA, #9B34A9, #F5456C) 1;
}

.bg-transparent-80 {
  background-color: rgba(0, 0, 0, 0.8);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
