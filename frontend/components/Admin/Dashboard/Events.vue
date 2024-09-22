<template>
    <div class="w-full max-w-4xl mx-auto p-4">
      <!-- Table Header -->
      <div class="overflow-x-auto bg-gradient-to-r from-blue-500 to-pink-500 rounded-t-lg shadow-lg mb-4">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="text-white">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Event Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Minutes Ago</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Username</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
            </tr>
          </thead>
        </table>
      </div>
      <!-- Table Body -->
      <div class="bg-[#21252D] rounded-b-lg shadow-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <tbody class="text-gray-200">
            <tr v-for="event in events" :key="event.id">
              <td class="px-6 py-4 text-sm font-medium">{{ event.type }}</td>
              <td class="px-6 py-4 text-sm">{{ event.minutesAgo }}</td>
              <td class="px-6 py-4 text-sm font-medium">{{ event.username }}</td>
              <td class="px-6 py-4 text-sm">{{ event.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        events: []  // Initialize as an empty array
      };
    },
    async created() {
      // Fetch data from backend API
      try {
        const response = await fetch('https://api.example.com/events'); //TODO: replace with actual API URL
        this.events = await response.json();
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles if necessary */
  </style>
  