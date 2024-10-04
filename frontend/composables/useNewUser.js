import { ref, readonly } from 'vue'
import { useStorage } from '@vueuse/core'

const user = ref(null)

export function useUser() {
  let storedUser = null;

  // Only initialize `localStorage` when on the client-side
  if (process.client) {
    storedUser = useStorage('user', null, localStorage, {
      serializer: {
        read: (v) => JSON.parse(v),
        write: (v) => JSON.stringify(v),
      },
    });

    // Sync stored user with current user ref
    if (storedUser.value && !user.value) {
      user.value = storedUser.value;
    }
  }

  const setUser = (newUser) => {
    user.value = newUser;
    if (storedUser) {
      storedUser.value = newUser;  // Only set storedUser on client-side
    }
  }

  const { onLogout } = useApollo();
  const clearUser = () => {
    onLogout();
    user.value = null;
    if (storedUser) {
      console.log('clearing user', storedUser.value);
      storedUser.value = null;  // Only clear storedUser on client-side
      console.log('clearing user after', storedUser.value);
    }
  }

  return {
    user: readonly(user),
    setUser,
    clearUser
  }
}

export default useUser;
