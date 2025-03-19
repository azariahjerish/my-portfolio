// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/my-portfolio/', 
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  devtools: { enabled: true },
  css: ["vuetify/styles/main.sass",
  "@mdi/font/css/materialdesignicons.css"],
  build: {
  transpile: ["vuetify"]
  },
  })
