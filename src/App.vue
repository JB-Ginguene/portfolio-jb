<template>
  <div id="app" class="wrapper">
    <!-- Ma NavBar -->
    <NavBar class="page-header" />
    <!-- Affiche le contenu du routeur -->
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeIn"
      >
        <div class="content page-body">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>

    <Footer class="page-footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    NavBar,
    Footer,
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
  margin: 5vh 0vh;
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
