<template>
  <div id="app">
    <NavigationBar />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
// import axios from "axios";
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
import store from "./store";
import { getHostName } from "./infrastructure/app-manager";

export default {
  name: "app",
  components: {
    NavigationBar,
    Footer,
  },
  async created(){
    const hostname = getHostName();
    console.log(hostname);
  },
  store: store
};
</script>

<style lang="scss">
#app{
  width: 100%;
  min-height: 100vh;
}

</style>
