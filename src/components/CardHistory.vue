<template>
  <div
    class="history"
    v-bind:class="[history.isHovering ? 'pulse' : '']"
    @mouseover="mouseOver(history)"
    @mouseout="mouseLeave(history)"
  >
    <div class="logo">
      <img :src="require('@/assets/logos/' + history.urlLogo)" alt="logo" />
    </div>
    <div class="content-history">
      <h2 class="year">{{ history.year }}</h2>
      <h3 class="schoolOrCompany">{{ history.school }}{{ history.company }}</h3>
      <div class="diplomaOrPosition">
        {{ history.diploma }}{{ history.position }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { History } from "@/models/History.model";

export default defineComponent({
  name: "CardHistory",
  props: {
    history: History,
  },
  setup() {
    function mouseOver(history: History) {
      history.isHovering = true;
    }
    const mouseLeave = (history: History) => (history.isHovering = false);
    return { mouseOver, mouseLeave };
  },
});
</script>
<style scoped>
.history {
  margin: 2vh 2vh;
  padding: 2vh;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 16px 0px 16px;
  transition: 0.5s;
  width: 40%;
  display: flex;
  flex-direction: row;
}
.history:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.content-history {
  margin-left: 2vh;
}
.year,
.schoolOrCompany {
  margin: 0vh;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo > img {
  width: 15vh;
  height: 15vh;
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
  .history {
    width: 100%;
    margin: 2vh 0vh;
  }
}
</style>
