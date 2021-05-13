<template>
  <div id="app">
    <NavigationBar :user="user" />
    <div>
      <router-view :user="user" />
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
import store from "./store";
import { getHostName } from "./infrastructure/app-manager";

export default {
  name: "app",
  components: {
    NavigationBar,
    Footer
  },
  store: store,
  beforeMount: function() {
    store.dispatch('user/checkAuth');
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
