<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-sm-12 col-12 left-side">
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
             <a href=""><i class="fas fa-shopping-cart"></i> Add to cart</a>
            </button>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12 col-12 right-side">
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
  padding-top: 5%;
  .book-left {
    font-size: small;
    text-align: right;
    font-style: italic;
    color: rgba(0, 0, 0, 0.5);
  }
}

button {
  margin-top: 10%;
  background: rgba(236, 212, 180, 1);
  border-radius: 10px;
  width: 150px;
  text-decoration: none;
  padding-bottom: 2%;
  a{
    color: rgba(0, 0, 0, 0.54);
    transition: 0.3s;
  }
  i {
    position: relative;
    width: auto;
    margin-right: 5%;
  }
}

button:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}

a:hover {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
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