<template>
  <div class="container-fluid">
    <div class="row books">
      <div
        class="col-lg-4 col-md-6 col-sm-12 col-12"
        v-for="book in books"
        :key="book.id"
      >
        <router-link to="/bookinfo"
          ><img class="book-cover" src="../assets/book/gulliver.png" alt=""
        /></router-link>

        <div class="book-name">{{ book.book_name }}</div>
        <div class="row book-info">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            {{ book.rentFee }}
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6 cart">
            <button class="btn">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Books",
  emits: ["add-to-cart"],
  data() {
    return {
      books: [
        {
          id: 1,
          book_name: "Gulliver's Travel",
          rentFee: "10$",
        },
        {
          id: 2,
          book_name: "Gulliver's Travel",
          rentFee: "10$",
        },
        {
          id: 3,
          book_name: "Gulliver's Travel",
          rentFee: "10$",
        },
        {
          id: 4,
          book_name: "Gulliver's Travel",
          rentFee: "10$",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-top: 7%;
}
.book-cover {
  // margin-top: 12%;
  width: 100%;
  height: auto;
}
.book-name {
  padding-top: 5%;
  font-size: large;
  font-weight: bold;
}
.book-info {
  margin-top: 0;
  padding: 2% 0 5% 0;
  color: rgba(0, 0, 0, 0.54);
  align-items: center;
  margin-bottom: 15%;
  button i {
    float: right;
    color: rgba(0, 0, 0, 0.54);
    font-size: large;
    transition: 0.3s;
  }
  .cart{
    text-align: right;
  }
  .btn{
    padding: 0;
  }
  i:hover{
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>