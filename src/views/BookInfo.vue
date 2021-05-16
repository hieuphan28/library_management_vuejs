<template>
  <div class="container">
    <div class="row">
      <categories class="col-lg-3 col-md-3 col-sm-3 col-3"> </categories>
      <book-profies :book_id="book_id" class="col-lg-8 col-md-8 col-sm-8 col-7"> </book-profies>
    </div>
  </div>
</template>

<script>
import BookProfies from "../components/BookProfies.vue";
import Carousel from "../components/Carousel.vue";
import Categories from "../components/Categories.vue";

export default {
  name: "BookInfo",
<<<<<<< HEAD
  components: {
    Categories,
    BookProfies
  }
=======
  data() {
    return {
      book_id: this.$router.currentRoute.value.params.book_id
    }
  },
  components: {
    Categories,
    BookProfies,
  },
>>>>>>> d4ba687b408124a94995bc9773bff9c080b416fc
};
</script>

<style lang="scss" scoped>
.container {
  padding: 3%;
}
</style>
