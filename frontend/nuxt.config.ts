export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    '@vee-validate/nuxt',
  ],

  // Uncomment and configure the Apollo module if needed
  // apollo: {
  //   autoImports: true,
  //   clients: {
  //     default: {
  //       httpEndpoint: 'http://localhost:8080/v1/graphql'
  //     }
  //   },
  // },
  
  devtools: { enabled: true },

  pages: true,
})