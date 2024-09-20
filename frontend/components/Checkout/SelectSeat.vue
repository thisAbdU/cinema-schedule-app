<template>
    <div class="container mx-auto p-4 flex flex-col md:flex-row my-20">
      <!-- Cinema Layout -->
      <div class="cinema-layout flex-1 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-auto" viewBox="0 0 600 300">
          <!-- Adjust seat positions according to your layout -->
          <g v-for="seat in seats" :key="seat.id">
            <!-- Reserved Seats -->
            <circle
              v-if="seat.status === 'reserved'"
              :cx="seat.x"
              :cy="seat.y"
              :r="seat.radius"
              fill="red"
              class="seat reserved"
            />
            <!-- Booked Seats -->
            <circle
              v-else-if="seat.status === 'booked'"
              :cx="seat.x"
              :cy="seat.y"
              :r="seat.radius"
              fill="green"
              class="seat booked"
            />
            <!-- Available Seats -->
            <circle
              v-else
              :cx="seat.x"
              :cy="seat.y"
              :r="seat.radius"
              fill="gray"
              class="seat available"
              @click="selectSeat(seat)"
            />
          </g>
        </svg>
      </div>
  
        <!-- Booking Info and Form -->
        <div class="booking-info flex-1 p-4 md:p-8">
        <div class="mb-6">
            <p class="text-lg font-semibold mb-2">Selected Seats: <span class="font-bold">{{ selectedSeats.length }}</span></p>
            <p class="text-lg font-semibold">Total Price: $<span class="font-bold">{{ totalPrice }}</span></p>
        </div>
        <!-- Form Container -->
        <div class="booking-form bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto md:mx-0">
            <h2 class="text-2xl font-bold mb-4 text-gray-800">Booking Summary</h2>
            <form>
            <!-- Number of People (Non-editable) -->
            <div class="mb-4">
                <label for="numPeople" class="block text-gray-700 font-medium">Number of People:</label>
                <input
                type="text"
                id="numPeople"
                :value="numPeople"
                class="w-full p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-600"
                readonly
                />
            </div>
        
            <!-- Book Seats Button -->
            <button
              type="button"
              @click="handleSubmit"
              :disabled="selectedSeats.length === 0"
              class="w-full bg-custom-gradient text-white font-bold py-3 px-4 rounded-lg hover:bg-custom-gradient-hover transition">
            >
              Book Seats
            </button>


          <!-- Proceed to Checkout Button -->
          <button
            type="button"
            @click="proceedToCheckout"
            :disabled="selectedSeats.length === 0"
            class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition ease-in-out duration-300 mb-4"
          >
            Proceed to Checkout
          </button>
          
          </form>
        </div>
      </div>
    </div>
  </template>
  
//TODO: I should unselect back the seats I selected
  <script>
  export default {
    data() {
      return {
        seats: [
          // Example seat data; adjust positions and status
          { id: 1, x: 100, y: 50, radius: 20, status: 'available' },
          { id: 2, x: 160, y: 50, radius: 20, status: 'reserved' },
          { id: 3, x: 220, y: 50, radius: 20, status: 'available' },
          { id: 4, x: 100, y: 100, radius: 20, status: 'available' },
          { id: 5, x: 160, y: 100, radius: 20, status: 'reserved' },
          { id: 6, x: 220, y: 100, radius: 20, status: 'available' },
          // Add more seats with appropriate x, y, radius, and status
        ],
        selectedSeats: [],
      };
    },
    computed: {
      numPeople() {
        return this.selectedSeats.length;
      },
      totalPrice() {
        return this.selectedSeats.length * 10; // Example price calculation
      },
    },
    methods: {
      selectSeat(seat) {
        if (seat.status === 'reserved') {
          alert('This seat is reserved.');
          return;
        }
  
        if (seat.status === 'booked') {
          alert('This seat has already been booked.');
          return;
        }
  
        // Toggle seat selection
        seat.status = seat.status === 'available' ? 'booked' : 'available';
        const index = this.selectedSeats.findIndex(s => s.id === seat.id);
        if (index === -1) {
          this.selectedSeats.push(seat);
        } else {
          this.selectedSeats.splice(index, 1);
          seat.status = 'available'; // Mark as available if deselected
        }
      },
      handleSubmit() {
        alert(`Seats booked: ${this.selectedSeats.length}. Total price: $${this.totalPrice}`);
        // Handle form submission logic (e.g., save to database)
      },
      proceedToCheckout() {
      if (this.selectedSeats.length > 0) {
        // Navigate to checkout page
        this.$router.push('/checkout');
      } else {
        alert('Please select at least one seat.');
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .seat {
    cursor: pointer;
    transition: fill 0.3s;
  }
  .seat.available:hover {
    fill: lightgray;
  }
  .seat.reserved {
    cursor: not-allowed;
  }
  .seat.booked {
    cursor: not-allowed;
  }
  </style>
  