<template>
  <!-- <v-app :class="!smAndDown ? 'bg-primary background-img' : ''"> -->
  <v-app class="bg-primary background-img" id="home">
    <v-container v-if="!smAndDown" fluid class="pa-16 container">
      <v-main>
        <nuxt-page />
      </v-main>
    </v-container>
    <v-main v-else>
      <nuxt-page />
    </v-main>
  </v-app>
</template>

<script setup>
import { useDisplay } from "vuetify";

const { smAndDown } = useDisplay(); // Directly reactive
</script>

<style scoped>
.background-img {
  background-image: url("/asserts/main_bg.png") !important;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  /* position: fixed; */
}

.container {
  position: relative;
  overflow: auto;
}

@media (max-width: 960px) {
  .background-img {
    background: none !important;
    /* position: relative; */
  }
  .container {
    display: none;
  }
}
</style>
