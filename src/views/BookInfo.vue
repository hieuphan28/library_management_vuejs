<template>
  <div class="container">
    <div class="row">
      <categories class="col-lg-3 col-md-3 col-sm-3 col-3"> </categories>
      <book-profies :book_id="book_id" class="col-lg-9 col-md-9 col-sm-6 col-6"> </book-profies>
    </div>
  </div>
</template>

<script>
import BookProfies from "../components/BookProfies.vue";
import Carousel from "../components/Carousel.vue";
import Categories from "../components/Categories.vue";

export default {
  name: "BookInfo",
  data() {
    return {
      book_id: this.$router.currentRoute.value.params.book_id
    }
  },
  components: {
    Categories,
    BookProfies,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variable.scss/";
.container {
  padding: 3%;
}
</style>
