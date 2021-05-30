<template>
  <div class="container">
    <!-- UPDATE--BOOK--INFO -->
    <form action="" @submit.prevent="saveBook">
      <div class="updatebookinfo">
        <div class="row save">
          <button class="btn">Save</button>
        </div>

        <div class="row all">
          <div class="col-lg-5 col-md-5 col-sm-12 col-12 left-side">
            <div class="contain">
              <img class="book-cover" :src="bookInfo.thumbnail" alt="" />
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 col-12 right-side">
            <h1 class="title">
              <input type="text" v-model="bookInfo.book_name" required/>
            </h1>
            <div class="textarea">
              <textarea
                name="paragraph_text"
                cols="69"
                rows="4"
                v-model="bookInfo.description"
                 required
              ></textarea>
            </div>
            <div class="input-box">
              <span>Language:</span>
              <input type="text" placeholder="" v-model="bookInfo.language" required />
            </div>
            <div class="input-box">
              <span>Author:</span>
              <input type="text" placeholder="" v-model="bookInfo.author" required />
            </div>
            <div class="input-box">
              <span>Category:</span>
              <select v-model="bookInfo.category_id" required>
                <option
                  :value="option.category_id"
                  v-for="(option, index) in categories"
                  :key="index"
                >
                  {{ option.category_name }}
                </option>
              </select>
            </div>

            <div class="input-box">
              <span>Department:</span>
              <select v-model="bookInfo.department_id" required>
                <option
                  :value="option.department_id"
                  v-for="(option, index) in departments"
                  :key="index"
                >
                  {{ option.department_name }}
                </option>
              </select>
            </div>
            <div class="input-box">
              <span>Price:</span>
              <input
                type="double"
                min="0"
                placeholder=""
                v-model="bookInfo.price"
                 required
              />
            </div>
            <div class="input-box">
              <span>Rent Cost:</span>
              <input
                type="double"
                min="0"
                placeholder=""
                v-model="bookInfo.rent_cost"
                 required
              />
            </div>
            <div class="input-box">
              <span>Publication Date:</span>
              <input
                type="date"
                placeholder=""
                v-model="bookInfo.publication_date"
                 required
              />
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- UPDATE--BOOK--ITEM -->
    <div class="bookitem" v-for="(book, index) in bookItems" :key="index">
      <div class="row title">
        <div class="col-lg-6 col-md-6 col-sm-6 col-6 order">
          <h1>Book Item {{ book.id }} :</h1>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-6 button">
          <button class="btn" @click="removeBookItem(book)">
            <i class="fa fa-trash" aria-hidden="true"> Delete </i>
          </button>
          <button
            class="btn"
            style="margin-right: 10px"
            @click="saveBookItem(book)"
          >
            <i class="fa fa-save" aria-hidden="true"> Save </i>
          </button>
        </div>
      </div>
      <div class="info">
        <div class="input-box">
          <span>Barcode:</span>
          <input type="text" placeholder="" v-model="book.barcode" />
        </div>
        <div class="input-box">
          <span>Date of Purchase:</span>
          <input type="date" placeholder="" v-model="book.date_of_purchase" />
        </div>
        <div class="input-box">
          <span>Date add to lib:</span>
          <input
            type="date"
            placeholder=""
            v-model="book.date_added_to_library"
          />
        </div>

        <div class="input-box">
          <span>Location:</span>
          <input type="text" placeholder="" v-model="book.location" />
        </div>
        <div class="input-box">
          <span>Status:</span>
          <select v-model="book.status_key">
            <option v-for="(option, index) in testMapping()" :key="index">
              {{ option }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util";
import { getEnumKeys } from "../utilities/data-util";
import { BookStatus } from "../common/bundleOfEnum";
import book from "../store/modules/book";
export default {
  name: "UpdateBook",
  computed: {
    ...mapGetters({
      getBookById: "book/bookById",
      getBookItemById: "bookitem/bookItemByBookId",
      categories: "category/categories",
      departments: "department/departments",
    }),
    bookInfo() {
      return this.getBookById(this.book_id) || {};
    },
    bookItems() {
      return this.getBookItemById(this.book_id) || {};
    },
  },
  data() {
    return {
      book_id: this.$router.currentRoute.value.params.book_id,
    };
  },
  async mounted() {
    this.$store.dispatch("book/getBookById", this.book_id);
    this.$store.dispatch("bookitem/getBookItemByBookId", this.book_id);
  },
  methods: {
    async saveBook() {
      try {
        await this.$store.dispatch("book/updateBook", this.bookInfo);

        toastSuccess("Update book successfully.");
      } catch (e) {
        toastError(e);
      }
    },

    async saveBookItem(bookitem) {
      try {
        bookitem.status =
          bookitem.status_key === undefined
            ? BookStatus.UNDEFINED
            : BookStatus[bookitem.status_key];
        await this.$store.dispatch("bookitem/updateBookItem", bookitem);

        toastSuccess("Update book item successfully.");
      } catch (e) {
        toastError(e);
      }
    },

    async removeBookItem(bookitem) {
      try {
        await this.$store.dispatch("bookitem/removeBookItem", bookitem);

        toastSuccess("Remove book item successfully.");
      } catch (e) {
        toastError(e);
      }
    },
    testMapping() {
      return getEnumKeys(BookStatus);
    },
  },
};
</script>

<style lang="scss" scoped>
//UPDATEBOOKINFO
.updatebookinfo {
  margin-top: 5%;
  margin-bottom: 2%;

  .save {
    width: 100%;
    display: inline-block;
    button {
      width: 20%;
      float: right;
      margin-bottom: 3%;
      font-size: medium;
      background: rgba(236, 212, 180);
      border-radius: 10px;
      color: rgba(0, 0, 0, 0.54);
      box-shadow: 5px 5px 18px rgba(0, 0, 0, 0.38);
    }
    button:hover {
      background: #ffe5c3;
      color: rgba(0, 0, 0, 0.87);
    }
  }
  .all {
    .contain {
      border: solid 1px rgba(0, 0, 0, 0.38);
      width: 300px;
      height: 370px;
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
    .right-side {
      .title {
        input {
          width: 570px;
          font-size: xx-large;
          border: 0.25px solid rgba(0, 0, 0, 0.38);
        }
      }
      .des {
        margin-bottom: 4%;
        width: 570px;
        textarea {
          font-size: medium;
          color: rgba(0, 0, 0, 0.87);
          outline: 0.25px solid rgba(0, 0, 0, 0.38);
          border-radius: 6px;
        }
      }
      .input-box {
        margin-bottom: 4%;
      }
      select {
        width: 53%;
        float: right;
        font-size: medium;
        background: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.38);
        box-sizing: border-box;
        padding: 0.5% 0 0.5% 2%;
        margin-right: 10%;
      }
      .input-box span {
        color: rgba(0, 0, 0, 0.87);
        display: inline;
        font-size: medium;
        font-weight: bold;
      }
      .input-box input {
        /* border: none; */
        width: 53%;
        float: right;
        font-size: medium;
        background: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.38);
        box-sizing: border-box;
        padding: 0.5% 0 0.5% 2%;
        margin-right: 10%;
      }
    }
  }
}

//UPDATE BOOK ITEM
.bookitem {
  text-align: center;
  border-top: rgba(0, 0, 0, 0.25) solid;

  .title {
    margin-top: 3%;
    .order h1 {
      color: rgba(0, 0, 0, 0.87);
      font-size: x-large;
      text-align: left;
      font-weight: bold;
      margin-top: 0;
    }
  }

  .button button {
    float: right;
    width: 150px;
    background: #ecd4b4;
    // border: 1px solid #b7b7b7;
    box-sizing: border-box;
    // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin: 0% 0% 3% 0%;
    transition: 0.4s;

    i {
      padding-right: 0%;
      color: rgba(0, 0, 0, 0.38);
      font-size: medium;
    }
  }
  .button button:hover {
    background: #ffe5c3;
    color: rgba(0, 0, 0, 0.87);
  }

  .info {
    margin-bottom: 5%;
  }
  .input-box {
    margin-bottom: 2%;
  }
  .input-box span {
    margin-left: 20%;
    color: rgba(0, 0, 0, 0.87);
    display: inline;
    font-size: medium;
    font-weight: bold;
  }
  .input-box input {
    /* border: none; */
    width: 30%;
    float: right;
    font-size: medium;
    background: #fafafa;
    border: 1px solid #cecece;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0.5% 0 0.5% 2%;
    margin-right: 25%;
  }
  .input-box select {
    width: 30%;
    float: right;
    font-size: medium;
    background: #fafafa;
    border: 1px solid #cecece;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0.5% 0 0.5% 2%;
    margin-right: 25%;
  }
}
</style>
