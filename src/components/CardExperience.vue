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
