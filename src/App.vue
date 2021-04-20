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
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    NavigationBar,
    Footer,
  },
};
</script>

<style lang="scss">


</style>
