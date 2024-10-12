<template>
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeModal"></div>
  
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
            <!-- Added rounded-xl class for more pronounced rounding -->
            <div class="inline-block align-bottom bg-gray-800 rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gradient">
              <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 class="text-2xl leading-6 font-bold text-white" id="modal-title">
                      Confirm Your Booking
                    </h3>
                    <div class="mt-4">
                      <p class="text-lg text-gray-300">You have selected {{ selectedSeats.length }} seat(s).</p>
                      <p class="text-lg text-gray-300 mt-2">Total Price: ${{ totalPrice }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <!-- Added rounded-lg to buttons for consistency -->
                <button @click="proceedToCheckout" type="button" class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-custom-gradient text-base font-medium text-white hover:bg-custom-gradient-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-300 ease-in-out transform hover:-translate-y-1">
                  Proceed to Checkout
                </button>
                <button @click="closeModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-300 ease-in-out">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    show: Boolean,
    selectedSeats: Array,
  })
  
  const emit = defineEmits(['close', 'checkout'])
  
  const totalPrice = computed(() => props.selectedSeats.length * 10)
  
  const closeModal = () => {
    emit('close')
  }
  
  const proceedToCheckout = () => {
    emit('checkout')
  }
  </script>
  
  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  .border-gradient {
    border-image: linear-gradient(to right, #692ACA, #9B34A9, #F5456C) 1;
    border-radius: 0.75rem; /* Matches rounded-xl */
    overflow: hidden; /* Ensures content doesn't overflow rounded corners */
  }
  
  .bg-custom-gradient {
    background-image: linear-gradient(to right, #692ACA, #9B34A9, #F5456C);
  }
  
  .bg-custom-gradient-hover {
    background-image: linear-gradient(to right, #7B3ED5, #B03FB8, #FF5A7A);
  }
  </style>