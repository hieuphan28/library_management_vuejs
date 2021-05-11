<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12 col-12"
        v-for="item in shop"
        :key="item.id"
      >
        <router-link to="/bookinfo"
          ><img class="book-cover" src="../assets/book/gulliver.png" alt=""
        /></router-link>

        <div class="book-name">{{ item.book_name }}</div>
        <div class="row book-info">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            {{ item.rentFee }}
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <i class="fas fa-shopping-cart"> </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from "../store/item.js";
export default {
  name: "Books",
  data() {
    return {
      shop: items,
      cart: [],
    };
  },
  
};
</script>

<style lang="scss" scoped>
.row {
}
.book-cover {
  width: 100%;
  height: auto;
}
.book-name {
  padding-top: 5%;
  font-size: 20px;
}
.book-info {
  padding: 2% 0 8% 0;
  color: rgba(0, 0, 0, 0.54);
  align-items: center;
  i {
    color: rgba(0, 0, 0, 0.54);
    margin-right: auto;
    font-size: 20px;
  }
}
</style>

