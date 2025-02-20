<template>
  <div>
    <v-card class="pt-10 bg-transparent" elevation="0">
      <!-- Title Section -->
      <v-row align="center" justify="center" class="mb-3">
        <v-col cols="12" class="text-center">
          <h2 class="text-h3 font-weight-bold text-primary" id="education">
            Education
          </h2>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mb-5">
        <v-col cols="10" md="8" class="text-center">
          <p class="text-body-1 text-secondary">
            My educational journey has been a foundation for my growth and
            expertise in technology. Here are the key milestones that shaped my
            career.
          </p>
        </v-col>
      </v-row>

      <!-- Education Timeline -->
      <v-row align="center" justify="center" class="pa-7">
        <v-col cols="12" md="8">
          <v-row v-for="(step, index) in steps" :key="index">
            <v-col cols="10" md="11" class="pa-0">
              <v-card class="pa-4 ma-3 timeline-card">
                <h3 class="text-h6 font-weight-bold text-primary mb-2">
                  {{ step.title }}
                </h3>
                <p class="text-body-2 text-secondary mb-2">
                  <strong>Details:</strong> {{ step.description }}
                </p>
              </v-card>
              <v-card elevation="0" class="bg-transparent" height="20"></v-card>
            </v-col>

            <v-col
              cols="2"
              md="1"
              class="d-flex justify-center align-center flex-column"
            >
              <v-icon class="pa-4" color="primary" size="24">{{
                step.icon
              }}</v-icon>
              <v-divider
                v-if="index !== steps.length - 1"
                vertical
                color="primary"
                style="border-width: 2px; align-self: center"
              ></v-divider>
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
          title: "Salma Matric Hr. Sec. School",
          description: "Completed SSLC with a distinction of 91%",
          icon: "mdi-school",
        },
        {
          title: "Salma Matric Hr. Sec. School",
          description:
            "Achieved 77% in HSC, focusing on science and mathematics",
          icon: "mdi-school",
        },
        {
          title: "Sivanthi Adithanar College of Engineering",
          description:
            "Graduated in Mechanical Engineering with 77% and developed a strong technical foundation",
          icon: "mdi-school",
        },
        {
          title: "QSpiders",
          description:
            "Completed a Full-Stack Developer course, mastering frontend and backend technologies",
          icon: "mdi-code-tags",
        },
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
  /* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); */
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
