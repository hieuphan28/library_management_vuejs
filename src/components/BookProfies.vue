<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-12 col-sm-12 col-12 left-side">
          <div>
            <div class="contain">
              <img
                class="book-cover"
                :src="bookInfo.thumbnail"
                alt=""
                width="600"
                height="267"
              />
            </div>

            <div class="row book-info">
              <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                ${{ bookInfo.rent_cost }}
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-6 book-left">
                Only ({{ booksLeft }}) books left
              </div>
            </div>

            <button class="btn" v-if="isMember">
             <router-link to="/cart" ><i class="fas fa-shopping-cart"></i> Add to cart</router-link>
            </button>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12 col-12 right-side">
          <h1>{{ bookInfo.book_name }}</h1>
          <div>{{ bookInfo.description }}</div>
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
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 value">
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
                <li>{{ bookInfo.quantity }}</li>
                <li>{{ bookInfo.publication_date }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError } from "../utilities/toast-util";
export default {
  name: "BookProfies",
  props: ["book_id"],
  computed: {
    ...mapGetters({
      getBookById: "book/bookById",
    }),
     ...mapGetters("user", ["currentUser",  "isMember"]),
    bookInfo() {
      return this.getBookById(this.book_id) || {};
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("book/getBookById", this.book_id);
    } catch (e) {
      toastError(e);
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  width: 100%;
}

.row {
  margin-top: 5%;
}
.left-side {
  display: block;
}

.contain {
  border: solid 1px rgba(0, 0, 0, 0.87);
  display: block;
  width: 250px;
  height: 340px;
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
  margin-top: 5%;
  background: rgba(236, 212, 180, 1);
  border-radius: 10px;
  width: 150px;
  text-decoration: none;
  padding-bottom: 1%;
  a {
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

.right-side {
  h1 {
    font-size: xx-large;
    font-weight: bold;
  }
  .tip {
    font-weight: bold;
  }
}
</style>