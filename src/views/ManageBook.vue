<template>
  <PageLoader class="page-loader" />
  <div class="container">
    <div class="row head">
      <div class="col-lg-2 col-md-12 col-sm-12 col-12 left-side">
        <button class="btn d-block">
          <router-link to="/addbook"
            ><i class="fa fa-plus" aria-hidden="true"></i>Add New Book
          </router-link>
        </button>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12 col-12 left-side">
        <button class="btn d-block">
          <router-link to="/addcategory"
            ><i class="fa fa-plus" aria-hidden="true"></i>Add Category
          </router-link>
        </button>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12 col-12 left-side">
        <button class="btn d-block">
          <router-link to="/adddepartment"
            ><i class="fa fa-plus" aria-hidden="true"></i>Add Department
          </router-link>
        </button>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-6 search">
        <input type="text" placeholder="Search books" v-model="searchText" />
      </div>
    </div>

    <div class="row manage">
      <div
        class="col-lg-6 col-md-6 col-sm-12 col-12"
        v-for="book in books"
        :key="book.book_id"
      >
        <div class="row allbook">
          <div class="col-lg-5 col-md-12 col-sm-12 col-12">
            <div class="contain">
              <router-link :to="{ path: '/updatebook/' + book.book_id }">
                <img class="book-cover" :src="book.thumbnail" alt="" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12 col-12 book-info">
            <router-link :to="{ path: '/updatebook/' + book.book_id }"
              ><div class="book-name">{{ book.book_name }}</div></router-link
            >
            <div class="info">
              <div class="book_descrip">{{ book.description }}</div>
              <!-- <div class="quantity">{{ book.quantity }} book(s)</div> -->
            </div>
            <div class="button">
              <button @click="openPopup(book)" class="btn d-block">
                <a><i class="fa fa-trash"></i>Delete </a>
              </button>
              <div class="form-popup" id="myPopup">
                <form @submit.prevent="removeBook(removeBookData)" class="form-container">
                  <p>Are you sure you want to delete this book?</p>
                  <button type="submit" class="btn">
                    Yes
                  </button>
                  <button
                    type="button"
                    class="btn cancel"
                    @click="closePopup()"
                  >
                    No
                  </button>
                </form>
              </div>
              <router-link :to="{ path: '/updatebook/' + book.book_id }">
                <button class="btn d-block">
                  <a> <i class="fa fa-list" aria-hidden="true"></i>Edit </a>
                </button>
              </router-link>
              <router-link :to="`/addbookitem/${book.book_id}`">
                <button class="btn d-block">
                  <a>
                    <i class="fa fa-plus" aria-hidden="true"></i> Add Book Item
                  </a>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util";
import PageLoader from "../components/PageLoader.vue";
export default {
  name: "ManageBook",
  components: {
    PageLoader,
  },
  computed: {
    ...mapGetters({
      localSearch: "book/search",
    }),
    books: function() {
      return this.bookData;
    },
  },
  data() {
    return {
      searchText: undefined,
      bookData: undefined,
      removeBookData: undefined,
    };
  },
  async mounted() {
    try {
      this.bookData = this.$store.getters["book/books"];
      await this.$store.dispatch("book/init");
      this.bookData = this.$store.getters["book/books"];
    } catch (e) {
      toastError(e);
    } finally {
      this.$store.dispatch("category/init");
      this.$store.dispatch("department/init");
    }
  },
  methods: {
    async removeBook(book) {
      try {
        await this.$store.dispatch("book/removeBook", book);
        this.bookData = this.$store.getters["book/books"];

        this.closePopup(book);
        toastSuccess("Remove book successfully.");
      } catch (e) {
        this.closePopup(book);
        toastError(e);
      }
    },
    search() {
      this.bookData = this.localSearch(this.searchText);
    },
    openPopup(book) {
      this.removeBookData = book;
      document.getElementById("myPopup").style.display = "block";
    },
    closePopup() {
      document.getElementById("myPopup").style.display = "none";
    },
  },
  watch: {
    searchText: "search",
  },
};
</script>

<style lang="scss" scoped>
.container{
  min-height: calc(100vh - 95px); 
  padding-top: 3%;
}
.contain {
  border: solid 1px rgba(0, 0, 0, 0.38);
  width: 180px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  img {
    flex-shrink: 15;
    min-width: 100%;
    min-height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
  }
}
.head {
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.38);
    float: left;
  }
}
.head {
 
  button {
    float: left;
    width: 160px;
    background: #ecd4b4;
    border: 1px solid #b7b7b7;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin-bottom: 3%;
    padding: 1% 0% 2% 0%;
    a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.38);
      float: left;
    }

    i {
      margin-left: 8%;
      padding-right: 5%;
      color: rgba(0, 0, 0, 0.38);
      font-size: medium;
    }
    i {
      align-content: center;
    }
  }
  .search {
    text-align: right;
    input {
      // width: 20px;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.28);
      box-sizing: border-box;
      border-radius: 5px;
      padding: 1% 2% 1% 2%;
    }
    i {
      margin-left: 2%;
      color: rgba(0, 0, 0, 0.38);
    }
    i:hover {
      color: rgba(0, 0, 0, 0.87);
    }
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.38);
    font-style: italic;
  }
}

.allbook {
  margin: 5% 0%;
}

.book-cover {
  width: 100%;
  height: auto;
}
.book-name {
  color: rgba(0, 0, 0, 0.87);
  font-size: x-large;
  font-weight: bold;
}

.book_descrip {
  width: 100%;
  height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.info {
  margin: 2% 0%;
  font-size: medium;
  color: rgba(0, 0, 0, 0.54);
  font-style: italic;
  .quantity {
    margin-top: 1%;
  }
}

.button button {
  width: 150px;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-bottom: 3%;
  padding: 1% 0% 2% 4%;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.38);
    float: left;
  }

  i {
    color: rgba(0, 0, 0, 0.38);
    font-size: medium;
    margin-right: 5%;
  }
}

button:hover {
  background: #ffe5c3;
}

//POPUP
.form-popup {
  border: solid 0.5px rgba(0, 0, 0, 0.25);
  border-radius: 8rem;
  background-color: #ffff;
  text-align: center;
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  width: 450px;
  padding: 3rem 3rem 2rem 3rem;
  
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.25);
}
.form-popup form p {
  text-align: center;
  font-size: 120%;
  font-weight: bold;
}
.form-popup button {
  margin-right: 1rem;
  text-align: center;
  padding: 0.4rem 0 !important;
  color: rgba(0, 0, 0, 0.7);
}
</style>
