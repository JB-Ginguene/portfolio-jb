<template>
  <div class="contact">
    <h1>CONTACT</h1>
    <div class="container">
      <div class="resume">
        <a href="@/assets/resume/resume-jb-ginguene.pdf" download>
          <img
            src="@/assets/resume/resume-jb-ginguene.png"
            alt="Resume Jean-Baptiste Ginguené"
        /></a>
      </div>
      <div class="contact-me">
        <div class="title">
          <h3>Feel free to contact me for any further information !</h3>
        </div>
        <div class="social-network-logos">
          <a
            href="https://www.linkedin.com/in/jean-baptiste-ginguene/"
            target="_blank"
          >
            <i class="devicon-linkedin-plain social-network"></i>
          </a>
          <a href="https://github.com/JB-Ginguene" target="_blank">
            <i class="devicon-github-original social-network"></i>
          </a>
        </div>
        <div class="email">
          <a href="mailto : jbginguene@gmail.com">jbginguene@gmail.com </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
  components: {},
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
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
</style>
