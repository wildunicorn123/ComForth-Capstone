<template>
<navBarComp/>
  <router-view/>
</template>
<script>
import navBarComp from "./components/navBar-Comp.vue"
export default {
  components: { navBarComp },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  width: 90px;
  height: 90px;
  border-radius: 70px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
