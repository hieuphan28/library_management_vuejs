<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-5 col-5 left-side">
          <div>
            <img class="book-cover" src="../assets/book/gulliver.png" alt="" />
            <div class="row book-info">
              <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                {{ rentFee }}
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-6 book-left">
                Only ({{ booksLeft }}) books left
              </div>
            </div>

            <button class="btn">
              Add to cart<i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-7 col-7 right-side">
          <h1>{{ book_name }}</h1>
          <div>{{ description }}</div>
          <div class="row ">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
              <ul>
                <li>Language:</li>
                <li>Author:</li>
                <li>Category:</li>
                <li>Department:</li>
                <li>Quantity:</li>
                <li>Publication Date:</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
              <ul>
                <li>{{ language }}</li>
                <li>{{ book_author }}</li>
                <li>{{ category }}</li>
                <li>{{ department }}</li>
                <li>{{ quantity }}</li>
                <li>{{ publication_date }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookProfies",

  data() {
    return {
      book_name: "Gulliver's Travel",
      rentFee: "10$",
      booksLeft: "4",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form There are many variations of passages of Lorem Ipsum available ",
      language: "English",
      book_author: "Johnathan Swift",
      category: "Novel",
      department: "Comic Department",
      quantity: "24",
      publication_date: "17/2/1999",
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  width: 100%;
}
.left-side {
  display: block;
}
.book-cover {
  position: relative;
  margin: auto;
  height: auto;
}
.book-info {
  padding: 5%;
  .book-left {
    text-align: right;
    font-style: italic;
    color: rgba(0, 0, 0, 0.5);
  }
}

button {
  background: rgba(236, 212, 180, 1);
  border-radius: 10px;
  width: 40%;
  color: rgba(0, 0, 0, 0.54);

  i {
    position: relative;
    width: 50%;
  }
}
button:hover {
  color: white;
}

ul {
  margin: 20px 0 0 0;
  padding: 0;
  li {
    list-style: none;
    padding: 10px 0 10px 0;
  }
}
</style>