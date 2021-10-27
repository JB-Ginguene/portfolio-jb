<template>
  <div class="experiences-global">
    <h1>Experiences & Projects</h1>
    <div class="container">
      <CardExperience
        v-for="experience in experiences"
        :key="experience.title"
        :experience="experience"
      />
    </div>
  </div>
  <Footer class="page-footer" />
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { ref } from "@vue/reactivity";
import { Experience } from "@/models/Experience.model";

import CardExperience from "@/components/CardExperience.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Experience",
  components: { CardExperience, Footer },
  setup() {
    const experiences = ref<Experience[]>([
      {
        isHovering: false,
        isExperience: true,
        title: "Web Devloper",
        company: "DOTNET SAS, Nantes(44)",
        technos: {
          front: "JavaScript, jQuerry, HTML5, CSS3 (Materialize)",
          back: "PHP, SQL (MySQL)",
          tool: "MAMP, MacOS",
        },
        github: "https://github.com/JB-Ginguene/portfolio-jb",
      },
      {
        isHovering: false,
        isExperience: false,
        title: "This website",
        technos: {
          front: "JavaScript/Vue.js, HTML5, CSS3",
        },
        github: "https://github.com/JB-Ginguene/portfolio-jb",
      },
      {
        isHovering: false,
        isExperience: false,
        title: "Weather App",
        technos: {
          front: "JavaScript/Vue.js, HTML5, CSS3 (Bootsrap)",
        },
        github: "https://github.com/JB-Ginguene/weather-app",
      },
      {
        isHovering: false,
        isExperience: false,
        title: "Event website",
        technos: {
          front: "HTML5, CSS3 (Bootsrap)",
          back: "PHP/Symfony, SQL",
          tool: "WAMP",
        },
        github: "https://github.com/JB-Ginguene/sortir.com",
      },
      {
        isHovering: false,
        isExperience: false,
        title: "Real Estate Agency",
        technos: {
          front: "HTML5, CSS3 (Bootsrap)",
          back: "PHP/Symfony, SQL",
          tool: "WAMP",
        },
        github: "https://github.com/JB-Ginguene/immoJB",
      },
      {
        isHovering: false,
        isExperience: false,
        title: "Streaming platform",
        technos: {
          front: "HTML5, CSS3 (Bootsrap)",
          back: "PHP/Symfony, SQL",
          tool: "WAMP",
        },
        github: "https://github.com/JB-Ginguene/series",
      },
      {
        isHovering: false,
        isExperience: false,
        title: "Auction website",
        technos: {
          front: "HTML5, CSS3 (Bootsrap)",
          back: "JAVA EE, SQL",
          tool: "TomCat",
        },
        github: "https://github.com/JB-Ginguene/series",
      },
    ]);
    function mouseOver(experience: Experience) {
      experience.isHovering = true;
    }
    const mouseLeave = (experience: Experience) =>
      (experience.isHovering = false);
    return { experiences, mouseOver, mouseLeave };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
