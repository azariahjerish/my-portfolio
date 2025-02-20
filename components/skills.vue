<template>
  <div>
    <v-card class="mt-10 pa-0 pa-md-10 bg-transparent" elevation="0">
      <!-- Title Section -->
      <v-row align="center" justify="center" class="mb-3">
        <v-col cols="10" class="text-center">
          <h2 class="text-h3 font-weight-bold text-primary" id="skills">
            Skills
          </h2>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mb-5">
        <v-col cols="10" sm="6" md="10" class="text-center">
          <p class="text-body-1 text-secondary">
            Here are some of my skills, which I have honed in web development
            and other areas of software engineering.
          </p>
        </v-col>
      </v-row>

      <!-- <icon icon="vuetify" size="20" /> -->

      <!-- Skills Section -->
      <v-row class="px-5 px-md-6" align="center" justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="text-center mb-6"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <v-card class="pa-5 skill-card">
            <h3 class="text-h6 font-weight-bold mb-3">{{ skill.Title }}</h3>
            <div>
              <v-chip
                v-for="(sub, subIndex) in skill.SubTitle"
                :key="subIndex"
                class="ma-1 skill-chip"
                color="primary"
                outlined
              >
                <icon
                  class="d-flex align-center mr-1"
                  :icon="sub.icon"
                  size="20"
                />
                {{ sub.name }}
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import icon from "./icon.vue";
export default {
  data() {
    return {
      skills: [
        {
          Title: "Frontend",
          SubTitle: [
            { name: "Vue JS", icon: "vue" },
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "Vuetify", icon: "vuetify" },
            { name: "Nuxt JS", icon: "nuxt" },
            { name: "JavaScript", icon: "javascript" },
          ],
        },
        {
          Title: "Programming Language",
          SubTitle: [
            { name: "Go Lang", icon: "go" },
            { name: "Core Java", icon: "java" },
            { name: "JavaScript", icon: "javascript" },
          ],
        },
        {
          Title: "Database",
          SubTitle: [
            { name: "MariaDB", icon: "mariadb" },
            { name: "MySQL", icon: "mysql" },
            { name: "Postgres", icon: "postgres" },
          ],
        },
        {
          Title: "Other Tools",
          SubTitle: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Postman", icon: "postman" },
          ],
        },
      ],
    };
  },
  components: { icon },
};
</script>

<style scoped>
/* .custom-elevation {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(97, 77, 255, 0.2); 
} */

.text-h3 {
  color: #2c3e50;
}

.text-body-1 {
  color: #7f8c8d;
  line-height: 1.6;
}

.skill-card {
  border-radius: 10px;
  border: 2px solid #614dff; /* Define border width and color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(97, 77, 255, 0.2);
  transition: transform 0.3s;
}

.skill-card:hover {
  transform: translateY(-5px);
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(97, 77, 255, 0.2); */
}

.skill-chip {
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 600px) {
  .skill-card {
    padding: 20px;
  }

  .text-h3 {
    font-size: 1.25rem !important;
  }

  .text-body-1 {
    font-size: 0.9rem;
  }

  .skill-chip {
    font-size: 12px;
  }
}
</style>
