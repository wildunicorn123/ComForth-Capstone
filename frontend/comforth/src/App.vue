<template>
<navBarComp/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import navBarComp from "./components/navBar-Comp.vue"
import FooterComp from "./components/footerComp.vue"
export default {
  components: { navBarComp, FooterComp },
};
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/berkelium-type');
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
  color: rgba(253, 96, 57, 0.897);
}

nav a.router-link-exact-active :hover{
  font-family: 'Berkelium Type', sans-serif;
  color: #d1174c;
}
</style>
