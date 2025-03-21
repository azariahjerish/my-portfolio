<template>
  <div :class="['mt-5', $vuetify.display.smAndDown ? 'pr-8' : 'px-16']">
    <v-row align="center" justify="center" class="mb-3">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 font-weight-bold text-primary" id="experience">
          Experience
        </h2>
      </v-col>
    </v-row>
    <v-timeline align="start" :side="$vuetify.display.smAndDown ? 'end' : ''">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
      >
        <v-lazy
          :min-height="100"
          :options="{ threshold: 0.9 }"
          transition="fade-transition"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${year.color}`"
              v-text="year.year"
            ></div>
          </template>
          <div>
            <h2
              :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
            >
              {{ year.title }}
            </h2>
            <div>
              {{ year.description }}
            </div>
          </div>
        </v-lazy>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "orange",
        year: "2015-2016",
        heading: "SSLC",
        title: "Salma Matric Hr. Sec. School",
        description:
          "Successfully completed SSLC with a distinction of 91%. This phase helped build a strong academic foundation, focusing on mathematics, science, and language proficiency, which played a crucial role in shaping analytical and problem-solving skills.",
      },
      {
        color: "green",
        year: "2017-2018",
        heading: "HSE",
        title: "Salma Matric Hr. Sec. School",
        description:
          "Completed Higher Secondary Education with a distinction of 77%. Gained an in-depth understanding of physics, chemistry, and mathematics, which laid the groundwork for engineering studies. Developed a keen interest in technology and problem-solving.",
      },
      {
        color: "pink",
        year: "2018-2022",
        heading: "Bachelor of Engineering",
        title: "Sivanthi Adithanar College of Engineering",
        description:
          "Graduated with a Bachelor's degree in Mechanical Engineering, securing 77%. Developed a strong foundation in engineering principles, including thermodynamics, design, and manufacturing processes. Engaged in various projects and practical applications, strengthening technical and analytical abilities. Gained problem-solving skills that later helped in transitioning into software development.",
      },
      {
        color: "amber",
        year: "2022-2023",
        heading: "Full Stack Developer",
        title: "Qspiders",
        description:
          "Completed a Full-Stack Developer course, gaining expertise in frontend and backend technologies. Learned technologies such as JavaScript, Java, and databases like  MySQL. Built several projects, developing web applications with modern frameworks and best coding practices. Strengthened understanding of RESTful APIs, authentication, and performance optimization.",
      },
      {
        color: "cyan",
        year: "2022-Present",
        heading: "Software Developer",
        title: "Fortune Capitals",
        description:
          "Developing and integrating financial systems, including a payment gateway for the company’s trading platform, with Yes Bank, HDFC, and IDFC APIs. Built internal automation tools to streamline operations and enhance efficiency. Currently working on 'Allocation,' integrating NSE and MCX exchange APIs to optimize trade execution and allocation workflows.",
      },
    ],
  }),
};
</script>

<style>
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
