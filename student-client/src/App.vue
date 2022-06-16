<template>
  <div class="wrapper" style="padding: 0">
    <header>
      <h1 class="top-title">Tra cứu thông tin tuyển sinh</h1>
      <div class="logo">
        <img src="./assets/images/logo.png" alt="" />
      </div>
    </header>
    <!-- router -->
    <router-view />
    <!-- ---------- -->
    <footer>
      <p>Copy right by ©T</p>
    </footer>
  </div>
</template>

<script>
// import Student from "./components/student.vue";
export default {
  name: "App",
  components: {
    // Student,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.wrapper {
  width: 1200px;
  background-color: #fff;
  margin: 1rem auto 1rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 800px) {
  .wrapper {
    width: 500px;
  }
}

.top-title {
  text-transform: uppercase;
  padding: 1.5rem 0;
  background-color: rgb(233, 232, 230);
  color: #222;
  margin: 0;
}

.logo {
  margin: 1rem 0;
}

.logo img {
  width: 100px;
  height: 100px;
}
footer p {
  padding-top: 2.5rem;
}
footer {
  width: 100%;
  height: 100px;
  background-color: rgb(222, 222, 222);
}
</style>
