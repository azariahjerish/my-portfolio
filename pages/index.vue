<!-- pages/index.vue -->
<template>
  <v-card class="card" elevation="0" min-height="100vh">
    <!-- Navbar -->
    <navBar />
    <!-- Profile -->
    <profile />
  </v-card>
</template>

<style scoped>
.card {
  border-radius: 40px;
  overflow: hidden;
  background-image: linear-gradient(-225deg, #fffeff 0%, #d7fffe 100%);
}

@media (max-width: 960px) {
  .card {
    border-radius: 0px;
  }
}
</style>

<script>
import navBar from "~/components/navBar.vue";
import profile from "~/components/profile.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    navBar,
    profile,
  },
};
</script>
