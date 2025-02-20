// plugins/vuetify.ts

import 'vuetify/styles' // Ensure Vuetify styles are imported
import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi' // Material Design Icons
import { aliases, fa } from 'vuetify/iconsets/fa' // FontAwesome

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', // Default icon set (can be 'fa' or 'mdi')
      aliases,
      sets: {
        mdi,
        fa,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            // primary: '#1976D2',
            primary: '#614dff',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
