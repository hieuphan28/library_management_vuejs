<template>
  <div class="container-fluid">
    <div class="search" v-if="query && query.length > 0">
      Search results for
      <span>'{{ query }} '</span>
    </div>

    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12 col-12"
        v-for="item in books"
        :key="item.id"
      >
        <router-link :to="{ path: '/bookinfo/' + item.book_id }">
          <div class="contain bookimg">
            <img class="book-cover" :src="item.thumbnail" alt="" />
          </div>
        </router-link>
        <router-link :to="{ path: '/bookinfo/' + item.book_id }">
          <div class="book-name">{{ item.book_name }}</div>
        </router-link>
        <div class="row book-info">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6 fee">
            {{ item.rent_cost + "$" }}
          </div>
          <div v-if="isMember" @click="AddToCart(item)">
            <i class="fas fa-shopping-cart"> </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util.js";
import { UserRole } from "../common/bundleOfEnum";
export default {
  name: "Books",
  computed: {
    ...mapGetters({
      books: "book/books",
    }),
    ...mapGetters("user", ["isMember"]),
  },
  data() {
    return {
      cart: [],
      query: this.$route.query.q,
      skip: this.$route.query.skip,
      limit: this.$route.query.limit,
      category: this.$route.query.category,
      department: this.$route.query.department,
    };
  },
  async mounted() {
    try {
      if (this.category) {
        await this.$store.dispatch(
          "book/getBookByCategory",
          parseInt(this.category)
        );
      } else if (this.department) {
        await this.$store.dispatch(
          "book/getBookByDepart",
          parseInt(this.department)
        );
      } else if (this.query || this.skip || this.limit) {
        await this.$store.dispatch("book/searchBook", {
          query: this.query,
          skip: this.skip,
          limit: this.limit,
        });
      } else {
        await this.$store.dispatch("book/init");
      }
    } catch (e) {
      toastError(e);
    }
  },
  methods: {
    async AddToCart(book) {
      try {
        await this.$store.dispatch("reservation/addCurrentCartItem", {
          book_id: book.book_id,
        });

        this.$store.dispatch("bookitem/getBookItemByBookId", this.book_id);
        toastSuccess("Add item to cart successfully.");
      } catch (e) {
        toastError(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variable.scss/";
.search {
  border-bottom: solid 1px rgba(0, 0, 0, 0.87);
  margin-top: 5%;
  font-size: large;
  padding-bottom: 1%;
  span {
    color: #897160;
    font-style: italic;
  }
  @include mobile {
    font-size: small;
  }
}

.contain {
  border: solid 1px rgba(0, 0, 0, 0.38);
  width: 250px;
  height: 300px;
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

.row {
  margin-top: 2%;
  a {
    text-decoration: none;
  }
}
.bookimg {
  @include mobile {
    width: 100px;
    height: 120px;
  }
}
.book-cover {
  width: 100%;
  height: auto;
}
.book-name {
  padding-top: 3%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  list-style: none;
  @include mobile {
    font-size: small;
  }
}
.book-info {
  margin-top: 5%;
  padding-bottom: 20%;
  color: rgba(0, 0, 0, 0.54);
  align-items: center;

  .fee {
    @include mobile {
      font-size: 0.9em;
    }
  }
  i {
    color: rgba(0, 0, 0, 0.38);
    float: right;
    font-size: 20px;
    transition: 0.3s;
    cursor: pointer;
    @include mobile {
      float: left;
      font-size: 1em;
    }
  }
  i:hover {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
