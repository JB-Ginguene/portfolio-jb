<template>
  <div class="education-global">
    <h1>Education</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.education {
  margin: 2vh 0vh;
  padding: 2vh;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 16px 0px 16px;
  transition: 0.5s;
}
.education:hover {
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
  .education {
    width: 100%;
  }
}
</style>
