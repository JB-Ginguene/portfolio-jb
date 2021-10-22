<template>
  <div class="history-global">
    <h1>History</h1>
    <div class="container">
      <CardHistory
        v-for="history in histories"
        :key="history.year"
        :history="history"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { ref } from "@vue/reactivity";
import { History } from "@/models/History.model";

import CardHistory from "@/components/CardHistory.vue";

export default defineComponent({
  name: "History",
  components: { CardHistory },
  setup() {
    // Datas :
    const histories = ref<History[]>([
      {
        year: "2021",
        school: "ENI IT School",
        diploma: "Web Development",
        urlLogo: "logo-eni.png",
        isHovering: false,
      },
      {
        year: "2019",
        company: "Solo trip",
        position: "in South East-Asia",
        urlLogo: "logo-travel.jpg",
        isHovering: false,
      },
      {
        year: "2017 - 2019",
        company: "Pbox prod",
        position: "Administrator",
        urlLogo: "logo-pbox-prod.png",
        isHovering: false,
      },
      {
        year: "2016",
        company: "La prod JV",
        position: "Production assistant",
        urlLogo: "logo-la-prod-jv.jpg",
        isHovering: false,
      },
    ]);

    // Methods :
    function mouseOver(history: History) {
      history.isHovering = true;
    }
    const mouseLeave = (history: History) => (history.isHovering = false);
    return { histories, mouseOver, mouseLeave };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.history {
  margin: 2vh 0vh;
  padding: 2vh;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 16px 0px 16px;
  transition: 0.5s;
}
.history:hover {
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
  .history {
    width: 100%;
  }
}
</style>
