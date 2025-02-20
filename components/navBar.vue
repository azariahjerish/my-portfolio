<template>
  <div>
    <!-- Header -->
    <div class="header d-flex align-center pa-5 ma-3">
      <div class="d-flex align-center">
        <v-avatar class="mr-3" color="primary" size="40">
          <span class="text-h6 font-weight-bold white--text">AJ</span>
        </v-avatar>
        <span class="font-weight-bold text-h5 text-primary"> Portfolio</span>
      </div>
      <v-spacer></v-spacer>
      <template class="" v-if="!smAndDown">
        <a
          v-for="(link, index) in links"
          :key="index"
          class="no-style-link px-5 nav-bar"
          :href="'#' + link.id"
          >{{ link.title }}</a
        >
      </template>
      <template v-else>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" color="primary">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(link, index) in links" :key="index">
              <v-list-item-title>
                <a class="no-style-link" :href="'#' + link.id">{{
                  link.title
                }}</a></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </div>
  </div>
</template>

<style>
.no-style-link {
  text-decoration: none; /* Removes the underline */
  color: #2e4056;
  font-weight: bold;
}

.nav-bar:hover {
  color: #9b92fd;
}

.nav-bar:active {
  color: #614cff;
}
</style>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const links = ref([
  { title: "Home", id: "home" },
  { title: "Skills", id: "skills" },
  { title: "Experience", id: "experience" },
  { title: "Education", id: "education" },
  { title: "Contact Me", id: "contact" },
]);

const { smAndDown } = useDisplay(); // Directly reactive
</script>
