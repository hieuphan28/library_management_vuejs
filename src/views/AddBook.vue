<template>
  <div class="container">
    <form class="add-book-form" @submit.prevent="addBookSubmit">
      <div class="row back">
        <router-link to="/managebook"
          ><i class="fa fa-arrow-left" aria-hidden="true"></i
        ></router-link>
      </div>
      <div class="row info">
        <div class="col-lg-5 col-md-5 col-sm-5 col-5 ava">
          <div class="row avatar">
            <img
              :src="image"
              alt=""
              class="previewImage"
              @click="$refs.fileInput.click()"
            />
          </div>
          <div class="row add-cover" @click="$refs.fileInput.click()">
            Choose file
            <input
              type="file"
              accept="image/*"
              @change="selectFile($event)"
              ref="fileInput"
              class="d-none"
            />
          </div>

          <div class="row pd">
            <div class="input-box">
              <span class="d-block">Description:</span>
              <textarea
                type="text"
                cols="100"
                rows="8"
                v-model="book.description"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-7 col-7 input">
          <div class="input-box">
            <span>Title:</span>
            <input type="text" placeholder="" v-model="book.book_name" />
          </div>
          <div class="input-box">
            <span>Language:</span>
            <input type="text" placeholder="" v-model="book.language" />
          </div>
          <div class="input-box">
            <span>Author:</span>
            <input type="text" placeholder="" v-model="book.author" />
          </div>
          <div class="input-box">
            <span>Category:</span>
            <select name="" id="">
              <option
                :value="option.value"
                v-for="(option, index) in categories"
                :key="index"
              >
                {{ option.category_name }}
              </option>
            </select>
          </div>
          <div class="input-box">
            <span>Department:</span>
            <select name="" id="">
              <option
                :value="option.value"
                v-for="(option, index) in departments"
                :key="index"
              >
                {{ option.department_name }}
              </option>
            </select>
          </div>
          <div class="input-box">
            <span>Publication Date:</span>
            <input type="text" placeholder="" v-model="book.publication_date" />
          </div>
          <div class="input-box">
            <span>Price:</span>
            <input type="text" placeholder="" v-model="book.price" />
          </div>
          <div class="input-box">
            <span>Rent Cost:</span>
            <input type="text" placeholder="" v-model="book.rent_cost" />
          </div>
        </div>
      </div>
      <div class="row bt">
        <button class="btn" type="submit">
          <a><i class="fa fa-plus"></i>Add Book </a>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util";
import { uploadImage } from "../services/upload-service";

export default {
  name: "AddBook",
  data() {
    return {
      book: {},
      imageFile: undefined,
      image:
        "data:image/png;base64,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",
    };
  },
  computed: {
    ...mapGetters({
      categories: "category/categories",
      departments: "department/departments",
    }),
  },
  methods: {
    async addBookSubmit() {
      try {
        this.book.thumbnail = await uploadImage(this.imageFile);
        await this.$store.dispatch("book/addBook", this.book);
        toastSuccess("Add book successfully!");
      } catch (e) {
        toastError(e);
      }
    },
    async selectFile(event) {
      this.imageFile = event.target.files[0];
      const file = this.imageFile;
      this.image = URL.createObjectURL(file)
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  margin-left: 1px;
  margin-bottom: 5%;
}

i {
  color: rgba(0, 0, 0, 0.38);
}
i:hover {
  color: rgba(0, 0, 0, 0.87);
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

.add-book-form {
  max-width: 550px;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #ffff;
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
.previewImage {
  width: 70%;
}
.add-cover {
  width: 40%;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  text-decoration: none;
  font-size: small;
  text-align: center;
  margin-left: 15%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 2% 0%;
  margin-top: 5%;
  
}
.add-cover:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}
.ava {
  .avatar {
    cursor: pointer;
    a {
      width: 80px;
      height: 100px;
      background-color: rgba(0, 0, 0, 0.1);
      i {
        font-size: x-large;
        margin-top: 50%;
      }
    }
  }
}
.pd {
  margin-top: 10%;

  textarea {
    margin-top: 10%;
    border: rgba(0, 0, 0, 0.25) solid 0.25px;
    width: 150px;
    height: auto;
  }
}

.input .input-box {
  margin-bottom: 8%;
  text-align: left;
  select {
    width: 55%;
    float: right;
    font-size: small;
    background: #fafafa;
    border: 1px solid #cecece;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 1% 0% 1% 2%;
  }
}
.input-box span {
  color: rgba(0, 0, 0, 0.54);
  display: inline;
  font-size: small;
  font-weight: bold;
}
.input-box input {
  // margin-right: 10px;
  width: 55%;
  float: right;
  font-size: small;
  background: #fafafa;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 1% 0% 1% 2%;
}

.bt {
  margin-left: 170px;
  margin-top: 2%;
  margin-bottom: 5%;
}
button {
  // text-align: center;
  width: 40%;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 1% 0% 2% 0%;
  transition: 0.3s;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.38);
    font-size: small;
    // box-shadow: rgba(0, 0, 0, 0.38) ;
  }

  i {
    color: rgba(0, 0, 0, 0.38);
    font-size: small;
    margin-right: 8%;
    transition: 0.3s;
  }

  a:hover{
    color: rgba(0, 0, 0, 0.87);
  }
}

button:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}


</style>