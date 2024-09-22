<template>
  <div class="max-w-sm w-full bg-gray-900 rounded-lg shadow p-4 md:p-6">
    <div class="grid grid-cols-2">
      <dl class="flex items-center">
        <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Average per Month: </dt>
        <dd class="text-gray-400 text-sm dark:text-white font-semibold">12</dd>
      </dl>
    </div>

    <!-- Adjusted spacing and height for the chart -->
    <div id="column-chart" class="my-2 mx=30">
      <canvas id="myBarChart"></canvas>
    </div>

    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
      <div class="flex justify-between pb-2 mb-4 border-b border-gray-200 my-4 dark:border-gray-700">
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M21 4H3c-1.1 0-1.99.9-1.99 2L1 18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 6h18v12H3V6zm3 2h2v2H6V8zm0 4h2v2H6v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2zm4-4h2v2h-2V8zm0 4h2v2h-2v-2z"/>
            </svg>
          </div>
          <div>
            <h5 class="leading-none text-2xl font-bold text-gray-300 dark:text-white pb-1">100</h5>
            <p class="text-sm font-normal text-gray-400 dark:text-gray-300">Movies aired so far</p>
          </div>
        </div>
        <div>
          <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
            </svg>
            42.5%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { onMounted } from 'vue';

export default {
  name: 'NumMoviesChart',
  setup() {
    onMounted(() => {
      Chart.register(...registerables);

      const ctx = document.getElementById('myBarChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Number of Movies',
            data: [10, 15, 8, 12, 18, 14, 20, 25, 17, 22, 19, 16],
            backgroundColor: function(context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) return;
              const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
              gradient.addColorStop(0, '#007997');
              gradient.addColorStop(0.5, '#7C466C');
              gradient.addColorStop(1, '#FF4081');
              return gradient;
            },
            borderColor: 'transparent',
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Months',
                color: '#fff',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Movies',
                color: '#fff',
              },
            },
          },
        },
      });
    });
  },
};
</script>

<style scoped>
#column-chart {
  height: 180px; 
}
</style>
