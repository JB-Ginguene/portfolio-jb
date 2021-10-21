<template>
  <nav>
    <div class="container">
      <input id="responsive-menu" ref="responsivemenu" type="checkbox" />
      <label for="responsive-menu"><span id="menu-icon"></span></label>
      <div id="overlay"></div>
      <ul>
        <li @click="hideMenu"><router-link to="/">Home</router-link></li>
        <li @click="hideMenu">
          <router-link to="/skills">Skills</router-link>
        </li>
        <li @click="hideMenu">
          <router-link to="/experience">Experience / Projects</router-link>
        </li>
        <li @click="hideMenu">
          <router-link to="/education">Education</router-link>
        </li>
        <li @click="hideMenu">
          <router-link to="/contact">Contact / Resume</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  methods: {
    hideMenu(): void {
      const checkbox = document.getElementById(
        "responsive-menu"
      ) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = false;
      }
    },
  },
});
</script>

<style scoped>
@import url(https://use.fontawesome.com/releases/v5.0.6/css/all.css);
@import url(https://fonts.googleapis.com/css?family=Oswald:400|Raleway:400,700,400italic,700italic);

nav {
  color: #1d1f20;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 9999;
}

nav input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

nav label {
  cursor: pointer;
  display: block;
  font: 2em/1 "Oswald", sans-serif;
  padding: 0.5em;
}

/* Hamburger Icon */
#menu-icon,
#menu-icon:before,
#menu-icon:after {
  background: #1d1f20;
  border-radius: 0.05em;
  height: 0.2em;
  transition: all 0.2s ease-in-out;
  width: 100%;
}

#menu-icon {
  display: inline-block;
  margin: 0.4em 0;
  max-width: 1em;
  position: relative;
}

nav label #menu-icon {
  float: right;
}

#menu-icon:before,
#menu-icon:after {
  content: "";
  left: 0;
  position: absolute;
}

#menu-icon:before {
  top: -0.4em;
}

#menu-icon:after {
  bottom: -0.4em;
}

/* Close Icon */
nav input[type="checkbox"]:checked + label #menu-icon {
  background: transparent;
}

nav input[type="checkbox"]:checked + label #menu-icon:before {
  top: 0;
  transform: rotate(-45deg);
}

nav input[type="checkbox"]:checked + label #menu-icon:after {
  bottom: 0;
  transform: rotate(45deg);
}

/*** MENU ***/
/* Overlay */
nav input:checked ~ #overlay {
  background: #a8a8a8;
  bottom: 0;
  left: 0;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
}

/* List */
nav ul {
  font-size: 5vh;
  list-style: none;
  margin: 0vh;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  text-align: center;
}

nav input:checked ~ ul {
  margin: 1em;
  max-height: inherit;
  opacity: 1;
}

nav ul > li {
  margin: 2vh 0;
}

nav ul a {
  color: #1d1f20 !important;
  text-decoration: none;
}

nav ul a:hover {
  text-decoration: underline;
}
</style>
