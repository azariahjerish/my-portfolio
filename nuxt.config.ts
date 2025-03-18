// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/my-portfolio/', // Replace with your GitHub repository name
  },
  nitro: {
    prerender: {
      routes: ['/'], // Ensures the homepage is generated
    },
  },
  devtools: { enabled: true },
  css: ["vuetify/styles/main.sass",
  "@mdi/font/css/materialdesignicons.css"],
  build: {
  transpile: ["vuetify"]
  },
  })