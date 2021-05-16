<template>
  <div class="container">
    <div class="row">
      <categories class="col-lg-3 col-md-3 col-sm-3 col-3"> </categories>
      <book-profies class="col-lg-8 col-md-8 col-sm-8 col-7"> </book-profies>
    </div>
  </div>
</template>

<script>
import BookProfies from "../components/BookProfies.vue";
import Carousel from '../components/Carousel.vue';
import Categories from "../components/Categories.vue";

export default {
  name: "BookInfo",
  components: {
    Categories,
    BookProfies
  }
};
</script>

<style lang="scss" scoped>
.container{
    padding: 3%;
}
</style>
