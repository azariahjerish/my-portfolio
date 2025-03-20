<template>
  <div class="mt-5">
    <svgAnimation
      style="
        position: absolute;
        left: 50%;
        top: 100px;
        transform: translateX(-50%);
      "
    />
    <v-row class="py-5" align="center" justify="center">
      <v-col cols="12" md="6" class="d-flex justify-center">
        <!-- <v-container class="svg-background"></v-container> -->
        <v-img
          class="image"
          :src="profileImage"
          alt="profile image"
          max-height="280"
          max-width="280"
        ></v-img>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <v-row align="center" justify="center">
          <v-col cols="10" class="mb-3">
            <span class="text-h5 font-weight-bold">Hi, I’m Azariah Jerish</span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="10" class="mb-3">
            <span class="text-h4 font-weight-bold">
              Software Developer & Problem Solver
            </span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="10" md="8">
            <span class="text-body-1 text-secondary">
              I build seamless, efficient applications from front to back,
              turning ideas into reality with clean, scalable code. I love
              crafting solutions that work beautifully and make an impact.
            </span>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="pt-5">
          <v-col cols="10">
            <v-btn
              class="elevation-2 text-capitalize font-weight-bold"
              color="primary"
              rounded
              @click="DownloadResume"
            >
              Download Resume
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- <v-row align="center" justify="center" class="">
      <v-col cols="12" md="5">
        <Lottie
          :animation-data="animationData"
          :loop="true"
          :autoplay="true"
          class="lottiedisplay"
        />
      </v-col>
    </v-row> -->

    <skills />

    <experience />

    <education />

    <contact />
  </div>
</template>

<script>
// import lottieData from "/lottieFiles/Animation.json"; // Corrected images path
import profileImage from "/my-portfolio/images/jerish.jpg";
import skills from "./skills.vue";
import experience from "./experience.vue";
import education from "./education.vue";
import contact from "./contact.vue";
import resumeFile from "/resume/azariah jerish.pdf";
import svgAnimation from "./svgAnimation.vue";
export default {
  data() {
    return {
      // animationData: lottieData,
      profileImage: profileImage,
    };
  },
  components: { skills, experience, education, contact, svgAnimation },
  methods: {
    DownloadResume() {
      const link = document.createElement("a");
      link.href = resumeFile;
      link.download = "azariahjerish.pdf";
      link.click();
    },
  },
};
</script>

<style scoped>
.text-h4 {
  color: #2c3e50;
  font-size: clamp(1.8rem, 4vw, 2rem) !important;
}

.text-h5 {
  color: #34495e;
  font-size: 1.5rem;
}

.text-body-1 {
  color: #7f8c8d;
  line-height: 1.8;
}

.text-secondary {
  color: #95a5a6;
}

.lottiedisplay {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.image {
  border-radius: 50%;
  border: 2px solid #614dff; /* Define border width and color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(97, 77, 255, 0.2);
}
</style>
