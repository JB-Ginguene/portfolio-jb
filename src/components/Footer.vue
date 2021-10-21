<template>
  <footer>
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
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  width: 100%;
}
.social-network-logos > a {
  text-decoration: none;
  color: whitesmoke;
}

.social-network-logos {
  width: 40%;
  display: flex;
  justify-content: space-around;
}
.social-network {
  font-size: 6vh;
}
.social-network:hover {
  color: #ffde59;
}
</style>
