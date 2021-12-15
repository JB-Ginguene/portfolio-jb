<template>
  <div
    class="experience"
    v-bind:class="[
      experience.isExperience ? 'xp' : 'project',
      experience.isHovering ? 'pulse' : '',
    ]"
    @mouseover="mouseOver(experience)"
    @mouseout="mouseLeave(experience)"
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
      <div class="tech tech-front" v-if="experience.technos.front">
        <div class="tech-icon">
          <i class="fas fa-desktop"></i>
        </div>
        <div class="tech-content">
          {{ experience.technos.front }}
        </div>
      </div>
      <div class="tech tech-back" v-if="experience.technos.back">
        <div class="tech-icon">
          <i class="fas fa-cogs"></i>
        </div>
        <div class="tech-content">
          {{ experience.technos.back }}
        </div>
      </div>
      <div class="tech tech-back" v-if="experience.technos.tool">
        <div class="tech-icon">
          <i class="fas fa-wrench"></i>
        </div>
        <div class="tech-content">
          {{ experience.technos.tool }}
        </div>
      </div>
    </div>
    <div class="github" v-if="experience.github">
      <div>Github link:</div>
      <a class="project-link" v-bind:href="experience.github" target="_blank">
        <i class="project-link-icon devicon-github-original"></i
      ></a>
    </div>
    <div class="github" v-if="experience.website">
      <div>Website:</div>
      <a class="project-link" v-bind:href="experience.website" target="_blank">
        <i class="project-link-icon fas fa-globe"></i
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { PropType } from "@vue/runtime-core";
import { Experience } from "@/models/Experience.model";

export default defineComponent({
  name: "CardExperience",
  props: {
    experience: Object as PropType<Experience>,
  },
  setup() {
    function mouseOver(experience: Experience) {
      experience.isHovering = true;
    }
    const mouseLeave = (experience: Experience) =>
      (experience.isHovering = false);
    return { mouseOver, mouseLeave };
  },
});
</script>
<style scoped>
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
.company {
  font-weight: bold;
  margin-bottom: 1vh;
}
.technos {
  display: flex;
  flex-direction: column;
}
.tech {
  display: flex;
  flex-direction: row;
  margin: 0.5vh 0vh;
}
.tech-icon {
  width: 3vh;
  margin-right: 2vh;
}
.github {
  display: flex;
  align-items: center;
}
.project-link {
  margin-left: 1vh;
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
