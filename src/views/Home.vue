<template>
  <Carousel />
  <NewBooks />
  <AllBooks />

</template>

<script>
import Carousel from "../components/Carousel.vue";
import AllBooks from "../components/AllBooks.vue";
import NewBooks from "../components/NewBooks.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    NewBooks,
    AllBooks

  },
};
</script>

<style lang="scss">
</style>
