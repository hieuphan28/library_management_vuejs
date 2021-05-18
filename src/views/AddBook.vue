<template>
  <div class="container">
    <form class="add-book-form" @submit.prevent="addBookSubmit">
      <div class="row back">
        <router-link to="/managebook"><i class="fa fa-arrow-left" aria-hidden="true"></i></router-link>
      </div>
      <div class="row info">
        <div class="col-lg-5 col-md-5 col-sm-5 col-5 ava">
          <div class="row avatar">
            <i class="fa fa-plus" aria-hidden="true">
              <input type="file" accept="image/*" @change="selectFile($event)" id="file-input">
            </i>
          </div>
          <div class="row pd">
            <div class="input-box">
              <span class="d-block">Description:</span>
              <textarea type="text" cols="100" rows="8" v-model="book.description"/>
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
            <input type="text" placeholder="" v-model="book.language"/>
          </div>
          <div class="input-box">
            <span>Author:</span>
            <input type="text" placeholder="" v-model="book.author"/>
          </div>
          <div class="input-box">
            <span>Category:</span>
            <input type="text" placeholder="" v-model="book.category_id"/>
          </div>
          <div class="input-box">
            <span>Department:</span>
            <input type="text" placeholder="" v-model="book.department_id"/>
          </div>
          <div class="input-box">
            <span>Publication Date:</span>
            <input type="text" placeholder="" v-model="book.publication_date" />
          </div>
          <div class="input-box">
            <span>Price:</span>
            <input type="text" placeholder="" v-model="book.price"/>
          </div>
          <div class="input-box">
            <span>Rent Cost:</span>
            <input type="text" placeholder="" v-model="book.rent_cost"/>
          </div>
        </div>
      </div>
      <div class="row bt">
        <button class="btn" type="submit">
          <a>Add Book <i class="fa fa-plus"></i></a>
        </button>
      </div>
    </form>
    
  </div>
</template>

<script>
import { toastError, toastSuccess } from '../utilities/toast-util';
import { uploadImage } from '../services/upload-service';

export default {
  name: "AddBook",
  data() {
    return {
      book: {},
      imageFile: undefined,
    }
  },
  methods: {
    async addBookSubmit() {
      try {
        this.book.thumbnail = await uploadImage(this.imageFile);
        await this.$store.dispatch('book/addBook', this.book);

        toastSuccess('Add book successfully!');
      } catch(e) {
        toastError(e);
      }
    },
    async selectFile(event) {
      this.imageFile = event.target.files[0];
    }
  }
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

.ava {
  padding-left: 2%;
  .avatar {
    margin-left: 18%;
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
    border: rgba(0,0,0,0.25) solid 0.25px;
    width: 150px;
    height: auto;
  }
}

.input .input-box {
  margin-bottom: 8%;
  text-align: left;
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
  padding: 1% 0%;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.38);
    font-size: small;
    // box-shadow: rgba(0, 0, 0, 0.38) ;
  }

  i {
    color: rgba(0, 0, 0, 0.38);
    font-size: small;
  }
}

button:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}
</style>