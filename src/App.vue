<template>
  <div id="app" class="wrapper">
    <!-- Ma NavBar -->
    <NavBar class="page-header" />
    <!-- Affiche le contenu du routeur -->
    <div class="content page-body">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavBar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2vh 2vh;
  color: whitesmoke;
}
.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.content {
  margin: 3vh 3vh;
}
body {
  background-color: #3a393e;
}
h1 {
  color: #ffeb4b;
}
h2 {
  color: #ffde59;
}
h3 {
  color: #ffde80;
}
@media only screen and (max-width: 600px) {
  /* PHONES */
  #app {
    margin: 2vh 1vh;
  }
  .content {
    margin: 1vh 0vh 2vh 0vh;
  }
}

/* Pulse effect of the different cards */
.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.01, 1.01, 1.01);
    transform: scale3d(1.01, 1.01, 1.01);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.01, 1.01, 1.01);
    transform: scale3d(1.01, 1.01, 1.01);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
