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
import axios from "axios";
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
import store from "./store";
import { getHostName } from "./infrastructure/app-manager";
import { toastError } from './utilities/toast-util';

export default {
  name: "app",
  components: {
    NavigationBar,
    Footer
  },
  store: store,
  beforeMount: async function() {
    try {
      await this.$store.dispatch('user/checkAuth');
      await this.$store.dispatch('category/init');
      await this.$store.dispatch('department/init');
    } catch(e) {
      toastError(e);
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
