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
              type="submit"
              :disabled="selectedSeats.length === 0"
              class="w-full bg-custom-gradient to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-custom-gradient-hover transition mb-4"
            >
              Book Seats
            </button>
            <button
            type="button"
            @click="proceedToCheckout"
            :disabled="selectedSeats.length === 0"
            class="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition ease-in-out duration-300"
          >
            Proceed to Checkout
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const createSeatRows = () => {
  const rows = []
  for (let i = 0; i < 5; i++) {
    const row = []
    for (let j = 0; j < 8; j++) {
      row.push({
        id: i * 8 + j + 1,
        status: Math.random() < 0.1 ? 'reserved' : 'available'
      })
    }
    rows.push(row)
  }
  return rows
}

const seatRows = ref(createSeatRows())
const selectedSeats = ref([])
const error = ref(null)

const totalPrice = computed(() => selectedSeats.value.length * 10)

const getSeatColor = (seat) => {
  switch (seat.status) {
    case 'reserved': return '#FF4136'
    case 'booked': return '#2ECC40'
    default: return '#7FDBFF'
  }
}

const getSeatPath = (rowIndex, seatIndex) => {
  const x = 60 + seatIndex * 80
  const y = 20 + rowIndex * 80
  return `
    M ${x} ${y}
    a 20 20 0 0 1 40 0
    v 30
    h 10
    v 10
    h -60
    v -10
    h 10
    v -30
    a 20 20 0 0 1 0 0
    z
  `
}

const selectSeat = (seat) => {
  if (seat.status === 'reserved') {
    error.value = 'This seat is reserved.'
    return
  }

  if (selectedSeats.value.length >= 10 && seat.status === 'available') {
    error.value = 'You can only book up to 10 seats at a time.'
    return
  }

  error.value = null
  if (seat.status === 'available') {
    seat.status = 'booked'
    selectedSeats.value.push(seat)
  } else {
    seat.status = 'available'
    const index = selectedSeats.value.findIndex(s => s.id === seat.id)
    if (index !== -1) {
      selectedSeats.value.splice(index, 1)
    }
  }
}

const handleSubmit = () => {
  alert(`Seats booked: ${selectedSeats.value.length}. Total price: $${totalPrice.value}`)
}

const proceedToCheckout = () => {
  if (selectedSeats.value.length > 0) {
    alert('Proceeding to checkout...')
  } else {
    error.value = 'Please select at least one seat.'
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
