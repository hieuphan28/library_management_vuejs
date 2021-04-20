<template>
  <div class="container-fluid">
    <div class="row">
      <categories class="col-lg-3 col-md-3 col-sm-3 col-3"> </categories>
      <books class="col-lg-9 col-md-9 col-sm-9 col-9"> </books>
    </div>
  </div>
</template>

<script>
import Books from "../components/Books.vue";
import Categories from "../components/Categories.vue";

export default {
  name: "BooksPage",
  components: {
    Books,
    Categories,
  },
};
</script>

<style lang="scss" scoped>
.container-fluid{
    padding: 3%;
}
</style>
