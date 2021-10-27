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
  <Footer class="page-footer" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { ref } from "@vue/reactivity";
import { History } from "@/models/History.model";

import CardHistory from "@/components/CardHistory.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "History",
  components: { CardHistory, Footer },
  setup() {
    // Datas :
    const histories = ref<History[]>([
      {
        year: "2021 - 2022",
        isSchool: true,
        school: "ENI IT School",
        diploma: "Master's degree",
        urlLogo: "logo-eni.png",
        detail: "Conception and development of web applications",
        isHovering: false,
      },
      {
        year: "2021",
        isSchool: true,
        school: "ENI IT School",
        diploma: "Bachelor's degree",
        urlLogo: "logo-eni.png",
        detail: "Web development",
        isHovering: false,
      },
      {
        year: "2019",
        isSchool: false,
        company: "Solo trip",
        detail: "in South East-Asia",
        urlLogo: "logo-travel.jpg",
        isHovering: false,
      },
      {
        year: "2017 - 2019",
        isSchool: false,
        company: "Pbox prod",
        position: "Administrator",
        urlLogo: "logo-pbox-prod.png",
        detail: "Concert & festival organization",
        isHovering: false,
      },
      {
        year: "2016",
        isSchool: false,
        company: "La prod JV",
        position: "Production assistant",
        urlLogo: "logo-la-prod-jv.jpg",
        detail: "Concert & festival organization",
        isHovering: false,
      },
      {
        year: "2015 - 2016",
        isSchool: true,
        school: "University of Le Mans",
        diploma: "Bachelor's degree",
        urlLogo: "logo-universite-le-mans.png",
        detail: "Music management",
        isHovering: false,
      },
      {
        year: "2012 - 2015",
        isSchool: true,
        school: "University of Savoie",
        diploma: "Associate's Degree",
        urlLogo: "logo-universite-savoie.png",
        detail: "Music management",
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
