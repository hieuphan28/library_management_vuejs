<template>
  <div class="container-fluid">
    <div class="row">
      <categories class="col-lg-3 col-md-3 col-sm-3 col-3"> </categories>
      <book-profies class="col-lg-9 col-md-9 col-sm-9 col-9"> </book-profies>
    </div>
  </div>
</template>

<script>
import BookProfies from "../components/BookProfies.vue";
import Categories from "../components/Categories.vue";

export default {
  components: { BookProfies, Categories },
  name: "BookInfo",aaaaa
  
};
</script>

<style lang="scss" scoped>
.container-fluid{
    padding: 3%;
}
</style>
