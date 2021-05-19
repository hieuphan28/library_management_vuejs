<template>
  <Carousel />
  <NewBooks />
  <AllBooks />
</template>

<script>
import Carousel from "../components/Carousel.vue";
import AllBooks from "../components/AllBooks.vue";
import NewBooks from "../components/NewBooks.vue";
import store from "../store";

export default {
  name: "Home",
  components: {
    Carousel,
    NewBooks,
    AllBooks,
  },
  props: ["user"],
  mounted() {
    this.$store.dispatch('book/init');  
  },
};
</script>

<style lang="scss"></style>
