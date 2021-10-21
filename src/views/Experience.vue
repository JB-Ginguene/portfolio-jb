<template>
  <div class="experiences-global">
    <h1>Experiences & Projects</h1>
    <div class="container">
      <div
        class="experience"
        v-bind="experience"
        v-for="experience in experiences"
        :key="experience.title"
        v-bind:class="[
          experience.isExperience ? 'xp' : 'project',
          this.isHovering ? 'animate__animated animate__bounce' : '',
        ]"
        @mouseover="mouseOver"
        @mouseout="mouseLeave"
      >
        <h2 class="kind" v-if="experience.isExperience">Experience</h2>
        <h2 class="kind" v-else>Project</h2>
        <h3 class="title">
          {{ experience.title }}
        </h3>
        <div class="company">{{ experience.company }}</div>
        <div class="description">
          {{ experience.description }}
        </div>
        <div class="technos">
          <div class="tech-front">{{ experience.technos.front }}</div>
          <div class="tech-back">{{ experience.technos.back }}</div>
        </div>
        <div>
          <p>
            Github link:
            <a
              class="project-link"
              v-bind:href="experience.github"
              target="_blank"
            >
              <i class="project-link-icon devicon-github-original"></i
            ></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
// import CardExperience from "@/components/CardExperience.vue";

export default defineComponent({
  name: "Experience",
  // components: { CardExperience },

  data() {
    return {
      isHovering: false,
      experiences: [
        {
          isExperience: true,
          title: "Web Devloper",
          company: "DOTNET SAS, Nantes(44)",
          technos: {
            front: "JavaScript, jQuerry, HTML5, CSS3",
            back: "PHP, SQL",
          },
          github: "https://github.com/JB-Ginguene/portfolio-jb",
        },
        {
          isExperience: false,
          title: "This website",
          technos: {
            front: "JavaScript/Vue.js, HTML5, CSS3",
          },
          github: "https://github.com/JB-Ginguene/portfolio-jb",
        },
        {
          isExperience: false,
          title: "Weather App",
          technos: {
            front: "JavaScript/Vue.js, HTML5, CSS3 (Bootsrap)",
          },
          github: "https://github.com/JB-Ginguene/weather-app",
        },
        {
          isExperience: false,
          title: "Event website",
          technos: {
            front: "HTML5, CSS3 (Bootsrap)",
            back: "PHP/Symfony, SQL",
          },
          github: "https://github.com/JB-Ginguene/sortir.com",
        },
        {
          isExperience: false,
          title: "Real Estate Agency",
          technos: {
            front: "HTML5, CSS3 (Bootsrap)",
            back: "PHP/Symfony, SQL",
          },
          github: "https://github.com/JB-Ginguene/immoJB",
        },
        {
          isExperience: false,
          title: "Streaming platform",
          technos: {
            front: "HTML5, CSS3 (Bootsrap)",
            back: "PHP/Symfony, SQL",
          },
          github: "https://github.com/JB-Ginguene/series",
        },
        {
          isExperience: false,
          title: "Auction website",
          technos: {
            front: "HTML5, CSS3 (Bootsrap)",
            back: "PHP/Symfony, SQL",
          },
          github: "https://github.com/JB-Ginguene/series",
        },
      ],
    };
  },
  methods: {
    // mouseOver: function () {
    //   this.isHovering = true;
    // },
    // mouseLeave: function () {
    //   this.isHovering = false;
    // },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.experience {
  margin: 2vh 2vh;
  padding: 2vh;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 16px 0px 16px;
  transition: 0.5s;
  width: 25%;
}
.experience:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.project {
  background-color: #333333e3;
}
.kind {
  border-bottom: 0.4vh solid #ffde80;
  width: 80%;
  padding-bottom: 0.5vh;
}
.xp {
  background-color: #5f5f5f63;
}
ul {
  list-style: none;
}
ul > li {
  padding: 0.5vh;
}

.project-link {
  font-size: 4vh;
  text-decoration: none;
  color: whitesmoke;
}

.project-link:hover {
  color: #ffde59;
}

@media only screen and (max-width: 600px) {
  /* PHONES */
  .experience {
    width: 100%;
    margin: 2vh 0vh;
  }
}
</style>
