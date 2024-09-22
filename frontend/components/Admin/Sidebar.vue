<template>
   <div>
     <!-- Sidebar toggle button for mobile -->
     <button
       @click="toggleSidebar"
       class="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden"
       :aria-label="isSidebarOpen ? 'Close sidebar' : 'Open sidebar'"
     >
       <Icon v-if="isSidebarOpen" name="lucide:x" class="w-6 h-6" />
       <Icon v-else name="lucide:menu" class="w-6 h-6" />
     </button>
 
     <!-- Sidebar -->
     <aside
       :class="[
         'fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out',
         isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
         'lg:translate-x-0'
       ]"
     >
       <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
         <ul class="space-y-2 font-medium">
           <li v-for="tab in tabs" :key="tab.id">
             <a
               href="#"
               @click="setActiveTab(tab.id)"
               :class="[
                 'flex items-center p-2 rounded-lg group',
                 'transition-colors duration-200 ease-in-out',
                 activeTab === tab.id
                   ? 'text-[#FF4081] border-b-2 border-[#FF4081]'
                   : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
               ]"
             >
               <Icon
                 :name="tab.icon"
                 :class="[
                   'w-5 h-5 transition duration-75',
                   activeTab === tab.id
                     ? 'text-[#FF4081]'
                     : 'text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white'
                 ]"
               />
               <span class="ms-3">{{ tab.label }}</span>
             </a>
           </li>
         </ul>
       </div>
     </aside>
   </div>
 </template>
 
 <script setup>
 import { ref } from 'vue'
 
 const activeTab = ref('dashboard')
 const isSidebarOpen = ref(false)
 
 const tabs = [
   { id: 'dashboard', label: 'Dashboard', icon: 'lucide:grid' }, // Dashboard icon
   { id: 'movies', label: 'Movies', icon: 'lucide:film' },        // Movies icon
   { id: 'directors', label: 'Directors', icon: 'lucide:video' }, // Directors icon
   { id: 'actors', label: 'Actors', icon: 'lucide:user' },        // Actors icon
   { id: 'settings', label: 'Settings', icon: 'lucide:settings' },// Settings icon
   { id: 'sign-out', label: 'Sign out', icon: 'lucide:log-out' }, // Sign-out icon
 ]
 
 const setActiveTab = (tabId) => {
   activeTab.value = tabId
   if (window.innerWidth < 1024) {
     isSidebarOpen.value = false
   }
 }
 
 const toggleSidebar = () => {
   isSidebarOpen.value = !isSidebarOpen.value
 }
 </script>
 