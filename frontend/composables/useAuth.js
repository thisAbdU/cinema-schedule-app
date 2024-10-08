import { ref, computed } from 'vue';

const isAuthenticated = ref(false);

export function useAuth() {
  const setAuthenticated = (value) => {
    isAuthenticated.value = value;
  };

  const checkAuth = () => {
    // Check if there's a token in localStorage
    const token = localStorage.getItem('accessToken');
    isAuthenticated.value = !!token;
  };

  return {
    isAuthenticated: computed(() => isAuthenticated.value),
    setAuthenticated,
    checkAuth,
  };
}