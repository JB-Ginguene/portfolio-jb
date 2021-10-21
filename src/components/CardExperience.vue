<template>
  <div
    class="experience"
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
        <a class="project-link" v-bind:href="experience.github" target="_blank">
          <i class="project-link-icon devicon-github-original"></i
        ></a>
      </p>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";

// export default defineComponent({
//   name: "CardExperience",
//   props() {
//     {
//       isExperience, title, company, technos.front, technos.back, github;
//     }
//   },
//   data() {
//     return {
//       isHovering: false,
//     };
//   },
//   methods: {
//     mouseOver: function () {
//       this.isHovering = true;
//     },
//     mouseLeave: function () {
//       this.isHovering = false;
//     },
//   },
// });
</script>
