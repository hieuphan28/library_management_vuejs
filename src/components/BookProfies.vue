<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-12 col-sm-12 col-12 left-side">
          <div>
            <div class="contain">
              <img class="book-cover" :src="bookInfo.thumbnail" alt="" />
            </div>
            <div class="row book-info">
              <div class="col-lg-6 col-md-6 col-sm-3 col-3">
                ${{ bookInfo.rent_cost }}
              </div>
              <div class="col-lg-6 col-md-6 col-sm-9 col-9 book-left">
                Only ({{ bookLeft }}) books left
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12 col-12 right-side">
          <h1>{{ bookInfo.book_name }}</h1>
          <div class="des">{{ bookInfo.description }}</div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 tip">
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
                <li>{{ bookInfo.language }}</li>
                <li>{{ bookInfo.author }}</li>
                <li>
                  {{
                    bookInfo.category?.category_name || bookInfo.category_name
                  }}
                </li>
                <li>
                  {{
                    bookInfo.department?.department_name ||
                      bookInfo.department_name
                  }}
                </li>
                <li>{{ bookQuantity }}</li>
                <li>{{ bookInfo.publication_date }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="btn" v-if="isMember" @click="AddToCart">
        <i class="fas fa-shopping-cart"></i> Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util";
export default {
  name: "BookProfies",
  props: ["book_id"],
  computed: {
    ...mapGetters("user", ["currentUser", "isMember"]),
    ...mapGetters({
      getBookById: "book/bookById",
      bookItemQuantityByBookId: "bookitem/bookItemQuantityByBookId",
      bookItemAvailableByBookId: "bookitem/bookItemAvailableByBookId",
    }),
    bookInfo() {
      return this.getBookById(this.book_id) || {};
    },
    bookQuantity() {
      return this.bookItemQuantityByBookId(this.book_id);
    },
    bookLeft() {
      return this.bookItemAvailableByBookId(this.book_id);
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("bookitem/getBookItemByBookId", this.book_id);
      await this.$store.dispatch("book/getBookById", this.book_id);
    } catch (e) {
      toastError(e);
    }
  },
  methods: {
    async AddToCart() {
      try {
        await this.$store.dispatch("reservation/addCurrentCartItem", {
          book_id: this.book_id,
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
* {
  width: 100%;
  @include mobile{
    width: 13rem;
  }
}

.container {
  margin-top: 5%;
}
.left-side {
  display: block;
}

.contain {
  border: solid 1px rgba(0, 0, 0, 0.38);
  width: 270px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @include mobile {
    width: 100px;
    height: 120px;
  }
  img {
    flex-shrink: 15;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
  }
}

.des {
  display: block;
  width: 100%;
  height: 90px;
  position: relative;
  overflow: hidden;
}

.book-cover {
  position: relative;
  margin: auto;
  height: auto;
}
.book-info {
  padding-top: 3%;
  .book-left {
    font-size: small;
    text-align: right;
    font-style: italic;
    color: rgba(0, 0, 0, 0.5);
    @include mobile{
      width: 3rem;
    }
  }
}

button {
  margin-top: 3%;
  background: rgba(236, 212, 180, 1);
  border-radius: 10px;
  width: 150px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
  transition: 0.3s;
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

ul {
  padding: 0;
  li {
    list-style: none;
    padding: 5px 0 8px 0;
    @include mobile {
      width: 5rem;
    }
  }
}

.right-side {
  h1 {
    font-size: xx-large;
    font-weight: bold;
    margin-bottom: 1%;
    @include mobile {
      font-size:x-large;
    }
  }
  .tip {
    font-weight: bold;
    @include mobile {
      padding-right: 1rem;
    }
  }
}
</style>
