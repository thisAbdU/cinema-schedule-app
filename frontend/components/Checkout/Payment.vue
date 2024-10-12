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
  
      <div class="container mx-auto p-4 relative z-10">
        <h1 class="text-4xl font-bold text-white mb-8 text-center">Checkout</h1>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Booking Summary -->
          <div class="p-1 rounded-lg shadow-lg bg-gradient-to-br from-[#FF4766] to-[#5C28D4]">
            <div class="bg-gray-900 bg-opacity-90 p-6 rounded-lg backdrop-filter backdrop-blur-sm border-2 border-transparent bg-clip-padding">
              <h2 class="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4766] to-[#5C28D4]">Booking Summary</h2>
              <div class="space-y-4 text-gray-300">
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Movie:</span>
                  <span class="text-white">{{ bookingDetails.movie }}</span>
                </div>
                <!-- <div class="flex justify-between items-center">
                  <span class="font-semibold">Date:</span>
                  <span class="text-white">{{ bookingDetails.date }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Time:</span>
                  <span class="text-white">{{ bookingDetails.time }}</span>
                </div> -->
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Seats:</span>
                  <span class="text-white">{{ bookingDetails.seats.join(', ') }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Number of Tickets:</span>
                  <span class="text-white">{{ bookingDetails.seats.length }}</span>
                </div>
                <div class="mt-6 pt-4 border-t border-gray-700">
                  <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-white">Total:</span>
                    <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4766] to-[#5C28D4]">${{ bookingDetails.total }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Payment Form -->
          <div class="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
            <h2 class="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4766] to-[#5C28D4]">Payment Details</h2>
            <form @submit.prevent="processPayment">
              <div class="mb-4">
                <label for="cardName" class="block text-gray-300 font-medium mb-2">Name on Card</label>
                <input type="text" id="cardName" v-model="paymentDetails.cardName" required
                  class="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4766]">
              </div>
              <div class="mb-4">
                <label for="cardNumber" class="block text-gray-300 font-medium mb-2">Card Number</label>
                <input type="text" id="cardNumber" v-model="paymentDetails.cardNumber" required
                  class="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4766]"
                  placeholder="1234 5678 9012 3456">
              </div>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label for="expiryDate" class="block text-gray-300 font-medium mb-2">Expiry Date</label>
                  <input type="text" id="expiryDate" v-model="paymentDetails.expiryDate" required
                    class="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4766]"
                    placeholder="MM/YY">
                </div>
                <div>
                  <label for="cvv" class="block text-gray-300 font-medium mb-2">CVV</label>
                  <input type="text" id="cvv" v-model="paymentDetails.cvv" required
                    class="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4766]"
                    placeholder="123">
                </div>
              </div>
              <button type="submit"
                class="w-full bg-gradient-to-r from-[#FF4766] to-[#5C28D4] text-white font-bold py-4 px-4 rounded-lg hover:from-[#FF5F7E] hover:to-[#7440E7] transition duration-300 ease-in-out transform hover:-translate-y-1">
                Pay ${{ bookingDetails.total }}
              </button>
            </form>
          </div>
        </div>
      </div>
  
      <!-- Ticket Modal -->
      <div v-if="showTicketModal" class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
  <div class="bg-gray-900 bg-opacity-95 p-6 rounded-lg shadow-lg max-w-md w-full">
    <h2 class="text-2xl font-bold text-center mb-6 text-white">Your Ticket</h2>
    <p class="mb-4 text-gray-300"><strong>Movie:</strong> {{ bookingDetails.movie }}</p>
    <!-- <p class="mb-4 text-gray-300"><strong>Date:</strong> {{ bookingDetails.date }}</p>
    <p class="mb-4 text-gray-300"><strong>Time:</strong> {{ bookingDetails.time }}</p> -->
    <p class="mb-4 text-gray-300"><strong>Seats:</strong> {{ bookingDetails.seats.join(', ') }}</p>
    <p class="mb-6 text-gray-300"><strong>Total:</strong> ${{ bookingDetails.total }}</p>
    <button @click="downloadTicket" class="w-full bg-gradient-to-r from-[#FF4766] to-[#5C28D4] text-white font-bold py-3 rounded-lg hover:from-[#FF5F7E] hover:to-[#7440E7] transition duration-300 ease-in-out transform hover:-translate-y-1">
      Download Ticket
    </button>
    <button @click="closeTicketModal" class="mt-4 w-full text-gray-300 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
      Close
    </button>
  </div>
</div>

    </div>
  </template>

<script setup>
import {ref} from 'vue'
const { $locally } = useNuxtApp()

const booking_Details = ref(($locally.getItem('bookingDetails')))
const bookingDetailsValue = JSON.parse(booking_Details.value)

console.log("Booking details in payment selected seats", bookingDetailsValue)

const seatIdentifiers = bookingDetailsValue.selectedSeats
  .map(seat => `${seat.row}${seat.number}`)
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0].localeCompare(b[0]); // Sort by row first
    }
    return parseInt(a.slice(1)) - parseInt(b.slice(1)); // Then by seat number
  });

console.log(seatIdentifiers);

const bookingDetails = ref({
  movie: bookingDetailsValue.movieTitle,
  seats: seatIdentifiers,
  total: bookingDetailsValue.totalPrice
})

const paymentDetails = ref({
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: ''
})

const showTicketModal = ref(false)

const processPayment = () => {
  alert('Payment processed successfully!')
  showTicketModal.value = true
}

const closeTicketModal = () => {
  showTicketModal.value = false
}

const downloadTicket = () => {
  const ticketContent = `
    Movie: ${bookingDetails.value.movie}
    Date: ${bookingDetails.value.date}
    Time: ${bookingDetails.value.time}
    Seats: ${bookingDetails.value.seats.join(', ')}
    Total: $${bookingDetails.value.total}
  `
  const blob = new Blob([ticketContent], { type: 'text/plain' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'ticket.txt'
  link.click()
}

</script>
  