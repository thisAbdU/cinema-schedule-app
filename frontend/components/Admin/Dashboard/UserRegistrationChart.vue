<template>
    <div class="max-w-sm w-full bg-gray-900 rounded-lg shadow p-4 md:p-6">
      <div class="grid grid-cols-2">
        <dl class="flex items-center">
          <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Average per Month: </dt>
          <dd class="text-gray-500 text-sm dark:text-white font-semibold">12</dd>
        </dl>
      </div>
  
      <!-- Adjusted spacing and height for the chart -->
      <div id="line-chart" class="my-2">
        <canvas id="myLineChart"></canvas>
      </div>
  
      <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div class="flex justify-between pb-2 mb-4 border-b border-gray-200 my-4 dark:border-gray-700">
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
              <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
              </svg>
            </div>
            <div>
              <h5 class="leading-none text-2xl font-bold text-gray-500 dark:text-white pb-1">100</h5>
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Users Registered So Far</p>
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
    name: 'YourComponent',
    setup() {
      onMounted(() => {
        Chart.register(...registerables);
  
        const ctx = document.getElementById('myLineChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Number of Users Registered',
              data: [5, 10, 8, 15, 12, 20, 25, 18, 22, 28, 30, 35],
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
              borderColor: '#FF4081',
              borderWidth: 2,
              fill: true,
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
                  text: 'Number of Users',
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
  #line-chart {
    height: 180px;
    width: 100%; 
  }
  </style>
  