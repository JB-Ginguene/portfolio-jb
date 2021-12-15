<template>
  <div class="contact">
    <h1>CONTACT</h1>
    <div class="container">
      <div
        @mouseover="displayButton"
        @mouseleave="undisplayButton"
        class="resume"
      >
        <a href="@/assets/resume/resume-jb-ginguene.pdf" download>
          <img
            src="@/assets/resume/resume-jb-ginguene.png"
            alt="Resume Jean-Baptiste Ginguené"
          />
        </a>
        <button class="downloadBtn">Download my resume</button>
      </div>
      <div class="contact-me">
        <div class="title">
          <h3>Feel free to contact me for any further information !</h3>
        </div>
        <Footer class="page-footer" />

        <div class="email">
          <a href="mailto : jbginguene@gmail.com">jbginguene@gmail.com </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Contact",
  components: { Footer },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.container > div {
  margin: 2vh;
}
/* Resume */
.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.resume img {
  width: 20vw;
  border: 0.5vh solid #ffde59;
}
.resume:hover {
  opacity: 0.5;
}
.downloadBtn {
  display: flex;

  justify-content: center;

  align-items: center;
}
/* conact me */
.contact-me {
  text-align: center;
}
.email {
  font-size: 5vh;
  margin: 2vh 0vh;
}
.email > a {
  text-decoration: none;
  color: whitesmoke;
}
.email > a:hover {
  color: #ffde59;
}
/* Logos */
.social-network-logos {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.social-network-logos > a {
  text-decoration: none;
  color: whitesmoke;
}
.social-network:hover {
  color: #ffde59;
}
.social-network {
  font-size: 6vh;
}

/* Responsive */
@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column-reverse;
    display: flex;
    justify-content: center;
  }
  .resume img {
    width: 40vw;
  }
}
</style>
