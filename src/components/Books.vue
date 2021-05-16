<template>
  <div class="container-fluid">
    <div class="search">
      Search results for 
      <span>'{{search-result}} '</span>
    </div>

    <div class="row ">
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
          <div class="col-lg-6 col-md-6 col-sm-6 col-6 fee">
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
.search{
  border-bottom: solid 1px rgba(0, 0, 0, 0.87);
  margin-top: 5%;
  font-size: large;
  padding-bottom: 1%;
  span{
    color: #897160;
    font-style: italic;
  }
}

.row {
  margin-top: 3%;
}
.book-cover {
  width: 100%;
  height: auto;
}
.book-name {
  padding-top: 3%;
  font-size: 20px;
  font-weight: bold;
}
.book-info {
  margin-top: 5%;
  padding-bottom: 20%;
  color: rgba(0, 0, 0, 0.54);
  align-items: center;


  i {
    color: rgba(0, 0, 0, 0.38);
    float: right;
    font-size: 20px;
    transition: 0.3s;
  }
  i:hover{
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>

