export default defineNuxtPlugin(() => {
    return {
        provide: {
            locally: {
                getItem(item) {
                    if (process.client) {
                        return localStorage.getItem(item)    
                    } else {
                        return undefined
                    }
                },

                setItem(item, value) {
                    if (process.client) {
                        return localStorage.setItem(item, value)
                    }
                }
            },
            
            auth: {
                login: async (username, password) => {
                  // Implement your login logic here
                  isAdmin.value = false
                },
                loginAsAdmin: async () => {
                  // Implement admin login logic here
                  isAdmin.value = true
                },
                logout: () => {
                  // Implement logout logic
                  isAdmin.value = false
                },
                get isAdmin() {
                  return isAdmin.value
                }
              }
        }
    }
})