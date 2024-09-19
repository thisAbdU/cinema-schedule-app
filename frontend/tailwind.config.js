module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #FF4766 0%, #8530B8 75%, #5C28D4 100%)',
        'custom-gradient-hover': 'linear-gradient(to bottom right, #FF4766 0%, #8530B8 50%, #5C28D4 100%)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}