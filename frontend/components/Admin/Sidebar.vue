<template>
  <div class="relative">
    <!-- Sidebar toggle button for mobile -->
    <button
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-50 p-2 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-full shadow-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-pink-500 transition-transform duration-300 ease-in-out hover:scale-110"
      :aria-label="isSidebarOpen ? 'Close sidebar' : 'Open sidebar'"
    >
      <Icon v-if="isSidebarOpen" name="lucide:x" class="w-6 h-6 text-white" />
      <Icon v-else name="lucide:menu" class="w-6 h-6 text-white" />
    </button>

    <!-- Sidebar -->
    <aside
      @mouseenter="showSidebar"
      @mouseleave="hideSidebar"
      :class="[
        'fixed top-0 left-0 z-40 w-64 h-screen transition-all duration-300 ease-in-out transform',
        isSidebarOpen || isHovered ? 'translate-x-0' : '-translate-x-60',
        'lg:translate-x-0'
      ]"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-900 bg-opacity-80 backdrop-blur-md border-r border-gray-800 text-white">
        <div class="flex items-center justify-center mb-8 mt-4">
          <ContactRound className="h-12 mr-3" />
          <span class="text-2xl font-semibold">Admin Panel</span>
        </div>
        <ul class="space-y-2 font-medium">
          <li v-for="tab in tabs" :key="tab.id">
            <a
              href="#"
              @click="setActiveTab(tab.id)"
              class="relative flex items-center p-3 rounded-lg group transition-all duration-200 ease-in-out hover:bg-gray-800"
              :class="activeTab === tab.id ? 'bg-gray-800 text-pink-500' : 'text-gray-300'"
            >
              <Icon
                :name="tab.icon"
                :class="[
                  'w-6 h-6 transition duration-75',
                  activeTab === tab.id ? 'text-pink-500' : 'text-gray-400 group-hover:text-white'
                ]"
              />
              <span class="ms-3">{{ tab.label }}</span>
              <span 
                class="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 transition-transform duration-200 transform scale-x-0 group-hover:scale-x-100"
                :class="{ 'scale-x-100': activeTab === tab.id }"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div
      v-if="isSidebarOpen"
      @click="toggleSidebar"
      class="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 ease-in-out"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref('dashboard')
const isSidebarOpen = ref(false)
const isHovered = ref(false)

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: 'lucide:layout-dashboard' },
  { id: 'movies', label: 'Movies', icon: 'lucide:clapperboard' },
  { id: 'directors', label: 'Directors', icon: 'lucide:megaphone' },
  { id: 'actors', label: 'Actors', icon: 'lucide:users' },
  { id: 'settings', label: 'Settings', icon: 'lucide:settings' },
  { id: 'sign-out', label: 'Sign out', icon: 'lucide:log-out' },
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

const showSidebar = () => {
  isHovered.value = true
}

const hideSidebar = () => {
  isHovered.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isSidebarOpen.value = false
    isHovered.value = false
  } else {
    isHovered.value = false
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>