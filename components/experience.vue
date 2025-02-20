<template>
  <div>
    <v-card class="pt-10 bg-transparent" elevation="0">
      <!-- Title Section -->
      <v-row align="center" justify="center" class="mb-3">
        <v-col cols="12" class="text-center">
          <h2 class="text-h3 font-weight-bold text-primary" id="experience">
            Experience
          </h2>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mb-5">
        <v-col cols="10" md="8" class="text-center">
          <p class="text-body-1 text-secondary">
            Below is a summary of my professional journey, highlighting key
            contributions and achievements as a developer. These experiences
            showcase my ability to solve complex problems and deliver impactful
            solutions.
          </p>
        </v-col>
      </v-row>

      <!-- Experience Timeline -->
      <v-row align="center" justify="center" class="pa-7">
        <v-col cols="12" md="8">
          <v-row v-for="(step, index) in steps" :key="index">
            <v-col
              cols="2"
              md="1"
              class="d-flex justify-center align-center flex-column"
            >
              <v-icon class="pa-5" color="primary" size="24">{{
                step.icon
              }}</v-icon>
              <v-divider
                v-if="index !== steps.length - 1"
                vertical
                color="primary"
                style="border-width: 2px; align-self: center"
              ></v-divider>
            </v-col>

            <v-col cols="10" md="11" class="pa-0">
              <v-card class="pa-4 ma-3 timeline-card">
                <h3 class="text-h6 font-weight-bold text-primary mb-2">
                  {{ step.title }}
                </h3>
                <p class="text-body-2 text-secondary mb-2">
                  <strong>Role:</strong> {{ step.role }}
                </p>
                <p class="text-body-2 text-justify">
                  {{ step.description }}
                </p>
              </v-card>
              <v-card elevation="0" class="bg-transparent" height="20"></v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          title: "Fortune Capitals Pvt. Ltd.",
          role: "Full-Stack Developer",
          description:
            "Leading the development and integration of critical financial systems, including a payment gateway for the company’s trading application, seamlessly integrating with Yes Bank, HDFC, and IDFC bank RESTful APIs. Experienced in building internal automation tools that streamline manual processes, improving operational efficiency. Currently contributing to 'Allocation,'' a project involving deep integration with NSE and MCX exchange APIs, ensuring seamless trade execution and allocation workflows.",
          icon: "mdi-briefcase",
        },
        {
          title: "Freelance Projects",
          role: "Full-Stack Developer",
          description:
            "Worked on diverse web development projects, creating responsive and user-friendly applications. Utilized modern frameworks like Vue.js and Nuxt.js for frontend and implemented robust backend solutions with Golang.",
          icon: "mdi-laptop",
        },
        // {
        //   title: "Open Source Contributions",
        //   role: "Contributor",
        //   description:
        //     "Contributed to various open-source projects by resolving issues, optimizing code, and adding new features. Focused on improving project scalability and maintainability.",
        //   icon: "mdi-github",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.text-h3 {
  color: #2c3e50;
}

.text-body-1 {
  color: #7f8c8d;
  line-height: 1.6;
}

.timeline-card {
  border-radius: 10px;
  border: 2px solid #614dff; /* Define border width and color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(97, 77, 255, 0.2);
  transition: transform 0.3s;
}

.timeline-card:hover {
  transform: translateY(-5px);
}

@media (max-width: 600px) {
  .timeline-card {
    padding: 16px;
  }

  .text-h3 {
    font-size: 1.25rem !important;
  }

  .text-body-1 {
    font-size: 0.9rem;
  }
}
</style>
