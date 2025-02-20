<template>
  <div class="pt-10">
    <!-- Section Header -->
    <v-row align="center" justify="center">
      <v-col cols="12" class="mb-3 text-center">
        <h2 class="text-h3 font-weight-bold text-primary" id="contact">
          Contact Me
        </h2>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="10" md="8" class="mb-3 text-center">
        <p class="text-body-1 text-secondary">
          Feel free to get in touch! I'm always open to discussing projects or
          opportunities to contribute.
        </p>
      </v-col>
    </v-row>

    <!-- Contact Form -->
    <v-row align="center" justify="center" class="my-5">
      <v-card width="500" class="mx-8 pa-6 contact-card">
        <v-card-title class="text-h6 font-weight-bold"
          >Get in Touch 🚀</v-card-title
        >
        <v-card-text>
          <v-form
            ref="contactForm"
            v-model="formValid"
            action="https://formsubmit.co/j.azariahjerish@gmail.com"
            method="POST"
            target="_blank"
          >
            <!-- Hidden field to disable Captcha -->
            <input type="hidden" name="_captcha" value="false" />

            <v-text-field
              label="Your Name"
              name="name"
              v-model="form.name"
              :rules="[rules.required]"
              outlined
              dense
              required
            ></v-text-field>

            <v-text-field
              label="Your Email"
              name="email"
              v-model="form.email"
              :rules="[rules.required, rules.email]"
              outlined
              dense
              required
            ></v-text-field>

            <v-textarea
              label="Your Message"
              name="message"
              v-model="form.message"
              :rules="[rules.required]"
              outlined
              dense
              rows="4"
              required
            ></v-textarea>

            <v-card-actions class="d-flex justify-center">
              <v-btn color="primary" type="submit"> Submit </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const formValid = ref(false);

const rules = {
  required: (value) => !!value || "This field is required.",
  email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
};

const resetForm = () => {
  form.value = {
    name: "",
    email: "",
    message: "",
  };
  formValid.value = false;
};
</script>

<style scoped>
.contact-card {
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid #614dff; /* Define border width and color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 10px 20px rgba(97, 77, 255, 0.2);
  transition: transform 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.text-h3 {
  color: #2c3e50;
}

.text-body-1 {
  color: #7f8c8d;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .contact-card {
    width: 100%;
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
