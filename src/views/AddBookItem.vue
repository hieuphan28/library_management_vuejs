<template>
  <div class="container">
    <form
      class="add-item-form"
      action=""
      method=""
      @submit.prevent="addBookItem"
    >
      <div class="row back">
        <router-link to="/managebook"
          ><i class="fa fa-arrow-left" aria-hidden="true"></i
        ></router-link>
      </div>

      <div class="row title">
          <h1>{{ bookInfo.book_name }}</h1>
      </div>

      <div class="input-box">
        <span>Barcode:</span>
        <input type="text" placeholder="" v-model="bookitem.barcode" />
      </div>
      <div class="input-box" v-if="false">
        <span>Book Id:</span>
        <input type="text" placeholder="" v-model="bookitem.book_id" />
      </div>
      <div class="input-box">
        <span>Date of Purchase:</span>
        <input type="date" placeholder="" v-model="bookitem.date_of_purchase" />
      </div>
      <div class="input-box">
        <span>Date add to lib:</span>
        <input
          type="date"
          placeholder=""
          v-model="bookitem.date_added_to_library"
        />
      </div>

      <div class="input-box">
        <span>Location:</span>
        <input type="text" placeholder="" v-model="bookitem.location" />
      </div>
      <div class="input-box">
        <span>Status:</span>
        <select v-model="bookStatusSelected">
          <option v-for="(option, index) in testMapping()" :key="index">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="row bt">
        <button class="btn">
          <a>Add Book Item </a>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util";
import { getEnumKeys } from "../utilities/data-util";
import { BookStatus } from "../common/bundleOfEnum";

export default {
  name: "AddBookItem",
  data() {
    return {
      book_id: this.$route.params.book_id,
      bookitem: {},
      bookStatusSelected: undefined,
      BookStatus,
    };
  },
  computed: {
    ...mapGetters({
      getBookById: "book/bookById",
    }),
    bookInfo() {
      return this.getBookById(this.book_id) || {};
    },
  },
  methods: {
    async addBookItem() {
      try {
        this.bookitem.book_id = parseInt(this.book_id);
        this.bookitem.status = BookStatus[this.bookStatusSelected];

        await this.$store.dispatch("bookitem/addBookItem", this.bookitem);
        this.$router.push("/managebook");

        toastSuccess("Add bookitem successfully!");
      } catch (e) {
        toastError(e);
      }
    },

    testMapping() {
      return getEnumKeys(BookStatus);
    }
  },
  mounted() {
    if (!this.bookInfo.book_name) {
      this.$store.dispatch("book/getBookById", this.book_id);
    }
  },
};
</script>

<style lang="scss" scoped>
.back {
  margin-left: 1px;
  i {
    color: rgba(0, 0, 0, 0.38);
  }
  i:hover {
    color: rgba(0, 0, 0, 0.87);
  }
}

.title {
  margin-bottom: 5%;
  text-align: center;
  justify-content: center;
   h1 {
    color: rgba(0, 0, 0, 0.87);
    font-size: x-large;
    font-weight: bold;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 76.3vh;
  margin: 3% 0;
}

.add-item-form {
  max-width: 500px;
  width: 100%;
  height: auto;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  padding: 30px 30px 20px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 55%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.add-item-form .input-box {
  margin-bottom: 5%;
  text-align: left;
  margin-left: 10%;
}
.add-item-form .input-box span {
  color: rgba(0, 0, 0, 0.87);
  display: inline;
  font-size: small;
}
.add-item-form .input-box input {
  /* border: none; */
  width: 50%;
  margin-right: 10%;
  float: right;
  font-size: medium;
  background: #fafafa;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0.5% 0 0.5% 2%;
}
.input-box select{
   width: 50%;
  margin-right: 10%;
  float: right;
  font-size: medium;
  background: #fafafa;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0.5% 0 0.5% 2%;
}
.bt {
  margin-left: 130px;
  margin-top: 10%;
  margin-bottom: 5%;
}
button {
  // text-align: center;
  width: 50%;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 1% 0%;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.38);
    font-size: small;
    font-weight: bold;
    // box-shadow: rgba(0, 0, 0, 0.38) ;
  }
}

button:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}
</style>