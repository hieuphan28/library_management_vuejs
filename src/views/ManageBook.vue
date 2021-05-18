<template>
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
        <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
      </div>
    </div>

    <div class="row manage">
      <div
        class="col-lg-6 col-md-6 col-sm-12 col-12"
        v-for="book in books"
        :key="book.id"
      >
        <div class="row allbook">
          <div class="col-lg-5 col-md-5 col-sm-5 col-5">

            <div class="contain">
            <router-link :to="{ path: '/updatebook/' + book.book_id }">
              <img class="book-cover" :src="book.thumbnail" alt="" />
            </router-link>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-7 book-info">
            <router-link :to="{ path: '/updatebook/' + book.book_id }"
              ><div class="book-name">{{ book.book_name }}</div></router-link
            >
            <div class="info">
              <div class="book_descrip">{{ book.description }}</div>
              <div class="quantity">{{ book.quantity }} book(s)</div>
            </div>
            <div>
              <button class="btn d-block">
                <a @click="removeBook(book)"
                  ><i class="fa fa-trash"></i>Delete
                </a>
              </button>
              <button class="btn d-block">
                <router-link :to="{ path: '/updatebook/' + book.book_id }"
                  ><i class="fa fa-list" aria-hidden="true"></i
                  >Edit</router-link
                >
              </button>
              <button class="btn d-block">
                <router-link :to="`/addbookitem/${book.book_id}`"
                  ><i class="fa fa-plus" aria-hidden="true"></i>Add Book
                  Item</router-link
                >
              </button>
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
export default {
  name: "ManageBook",
  computed: {
    ...mapGetters({
      localSearch: 'book/search',
    }),
    books: function() {
      return this.bookData;
    },
  },
  data() {
    return {
      searchText: undefined,
      bookData: undefined,
    }
  },
  async mounted() {
    try {
      this.bookData = this.$store.getters['book/books'];
      await this.$store.dispatch('book/init');
      this.bookData = this.$store.getters['book/books'];
    }
    catch(e) {
      toastError(e);
    }
  },
  methods: {
    async removeBook(book) {
      try {
        await this.$store.dispatch("book/removeBook", book);

        toastSuccess("Remove book successfully.");
      } catch (e) {
        toastError(e);
      }
    },
    search() {
      this.bookData = this.localSearch(this.searchText);
    }
  },
  watch: {
    searchText: 'search' 
  }
};
</script>

<style lang="scss" scoped>

.contain {
  border: solid 1px rgba(0, 0, 0, 0.87);
  display: block;
  width: 210px;
  height: 280px;
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
  }
}


.head {
  margin-top: 5%;
  button {
    float: left;
    width: 160px;

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
      border-radius: 8px;
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
.info {
  margin: 2% 0%;
  font-size: medium;
  color: rgba(0, 0, 0, 0.54);
  font-style: italic;
  .quantity {
    margin-top: 1%;
  }
}

button {
  width: 150px;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-bottom: 5%;
  padding: 1.5% 0% 2.5% 0%;
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
}

button:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}
</style>