<template>
  <div class="home">
    <div class="container">
      <div class="profile-picture">
        <img
          class="fit-picture"
          src="@/assets/profile-picture-jb.jpg"
          alt="Jean-Bapiste Ginguené"
        />
      </div>
      <div class="content">
        <div class="name">
          <h1 class="firstname">JEAN-BAPTISTE</h1>
          <h1 class="lastname">GINGUENE</h1>
        </div>
        <div class="description" v-if="windowWidth > 600">
          <h3>Hey! I'm a web developper, currently looking for:</h3>
          <ul>
            <li>
              <h4>- an host company to do a work-study program.</h4>
            </li>
            <li>
              <h4>- an interesting project, both technically and humanly.</h4>
            </li>
          </ul>
        </div>
      </div>
      <div class="description mobile" v-if="windowWidth < 600">
        <h3>Hey! I'm a web developper, currently looking for:</h3>
        <ul>
          <li>
            <h4>- an host company to do a work-study program.</h4>
          </li>
          <li>
            <h4>- an interesting project, both technically and humanly.</h4>
          </li>
        </ul>
      </div>
    </div>
    <Footer class="page-footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: { Footer },

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.container > div {
  padding: 5vh;
}
.profile-picture {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profile-picture img {
  width: 45vh;
  height: 45vh;
  border: 1vh solid #ffde59;
}
.name {
  margin-bottom: 6vh;
}
.firstname {
  font-size: 6vh;
}
.lastname {
  font-size: 9vh;
}
ul {
  padding: 0vh;
  margin: 0vh;
}
li {
  list-style: none;
  padding: 0vh 2vh;
}
h1 {
  margin: 0vh;
}
@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column-reverse;
    display: flex;
    justify-content: center;
  }

  .container > div {
    padding: 0vh 2vh;
  }
  .profile-picture {
    order: 2;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .profile-picture img {
    width: 35vh;
    height: 35vh;
    border: 1vh solid #ffde59;
  }
  .home-content {
    text-align: center;
  }
  .content {
    margin: 0vh;
    order: 2;
    display: flex;
    justify-content: center;
  }
  .firstname {
    font-size: 4vh;
  }
  .name {
    margin: 3vh;
  }
  .lastname {
    font-size: 6vh;
  }
  .mobile {
    /* padding: 0vh 2vh; */
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2vh;
  }
  h3,
  h4 {
    margin: 2vh 0vh 0vh 0vh;
  }
}
</style>
