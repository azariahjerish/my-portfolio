// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'vuetify/styles', 
    '@mdi/font/css/materialdesignicons.css', // Material Design Icons
    '@fortawesome/fontawesome-free/css/all.css' // FontAwesome CSS
  ],
  build: {
    transpile: ['vuetify'],
  },
  plugins: ['~/plugins/lottie.js'],
})


