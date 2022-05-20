<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Ordinary />
  </div>
</template>

<script>
import Ordinary from "./components/Ordinary.vue";

export default {
  name: "App",
  components: {
    Ordinary,
  },
  data() {
    return {
      loginInfo: {
        loginState: false,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
</style>
