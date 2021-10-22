<template>
  <div class="skills-global">
    <h1>Skills</h1>
    <div class="container">
      <div class="skill">
        <h2>Back</h2>
        <ul>
          <li><i class="devicon-php-plain"></i> PHP : Vanilla & Symfony</li>
          <li><i class="devicon-java-plain"></i> Java : EE & SE</li>
          <li>
            <i class="devicon-mysql-plain"></i> SQL : MySQL & Microsoft SQL
            Server
          </li>
        </ul>
      </div>
      <div class="skill">
        <h2>Front</h2>
        <ul>
          <li>
            <i class="devicon-javascript-plain"></i> JavaScript : Vanilla & Vue
          </li>
          <li><i class="devicon-html5-plain"></i> HTML5</li>
          <li>
            <i class="devicon-css3-plain"></i> CSS3 : Bootstraps, Materialize &
            Sass (in progress)
          </li>
        </ul>
      </div>
      <div class="skill">
        <h2>Global</h2>
        <ul>
          <li><i class="devicon-git-plain"></i> Versioning : Git & Github</li>
          <li>
            <i class="devicon-windows8-original"></i> Environment : Windows &
            Mac
          </li>
          <li>
            <i class="devicon-vscode-plain"></i> IDE : JetBrains suite & VSCode
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
  components: {},
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.skill {
  margin: 2vh 0vh;
  padding: 2vh;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 16px 0px 16px;
  transition: 0.5s;
}
.skill:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  border-radius: 16px 0px 16px 0px;
  background-color: #333333e3;
}

ul {
  list-style: none;
}
ul > li {
  padding: 0.5vh;
}

@media only screen and (max-width: 900px) {
  /* PHONES */
  .skill {
    width: 100%;
  }
  ul {
    padding: 0vh;
  }
}
</style>
