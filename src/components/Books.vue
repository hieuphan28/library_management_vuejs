<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12 col-12"
        v-for="book in books"
        :key="book.id"
      >
      <router-link to="/bookinfo"><img class="book-cover" src="../assets/book/gulliver.png" alt="" /></router-link>
        
        <div class="book-name">{{ book.book_name }}</div>
        <div class="row book-info">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            {{ book.rentFee }}
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
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
  
}
.book-cover {
  width: 100%;
  height: auto;
}
.book-name{
    padding-top: 5%;
    font-size: 20px;
    
}
.book-info{
    padding: 2% 0 8% 0;
    color: rgba(0, 0, 0, 0.54);
    align-items: center;
    i{
         color: rgba(0, 0, 0, 0.54);
         margin-right: auto;
         font-size: 20px;
;
    }
}
</style>