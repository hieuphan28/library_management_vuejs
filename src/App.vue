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

export default {
  name: "app",
  components: {
    NavigationBar,
    Footer,
  },
    async created(){
    const response = await axios.get("user");
     
    console.log(response);
}
};
</script>

<style lang="scss">
#app{
  width: 100%;
  min-height: 100vh;
}

</style>
