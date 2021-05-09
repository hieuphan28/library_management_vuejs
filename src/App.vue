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

export default {
  name: "app",
  components: {
    NavigationBar,
    Footer,
  },
  async created() {
    const response = await axios.get(
      "https://lit-everglades-79316.herokuapp.com/api/profile",
      {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      }
    );

    console.log(response);
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
