export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@vee-validate/nuxt',
    '@pinia/nuxt',
  ],

  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: 'http://localhost:8080/v1/graphql',
        connectToDevTools: true,
      }
    },
  },
  
  devtools: { enabled: true },

  pages: true,
})