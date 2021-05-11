<template>
  <div class="container">
    <div class="row head">
      <div class="col-lg-2 col-md-12 col-sm-12 col-12 left">
        <button class="btn d-block">
          <router-link to="/addbook"
            ><i class="fa fa-plus" aria-hidden="true"></i>Add New Book 
          </router-link>
        </button>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12 col-12 left">
        <button class="btn d-block">
          <router-link to="/addbook"
            ><i class="fa fa-plus" aria-hidden="true"></i>Add Category
          </router-link>
        </button>
      </div>
      <div class="col-lg-2 col-md-12 col-sm-12 col-12 left">
        <button class="btn d-block">
          <router-link to="/addbook"
            ><i class="fa fa-plus" aria-hidden="true"></i>Add Department
          </router-link>
        </button>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-6 search">
        <input type="text" placeholder="Search books" />

        <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
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
            <router-link to="/updatebook">
              <img
                class="book-cover"
                src="../assets/book/gulliver.png"
                alt=""
              />
            </router-link>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-7 col-7 book-info">
            <router-link to="/updatebook"
              ><div class="book-name">{{ book.book_name }}</div></router-link
            >
            <div class="info">
              <div class="book_descrip">{{ book.book_descrip }}</div>
              <div class="quantity">{{ book.quantity }} book(s)</div>
            </div>
            <div>
              <button class="btn d-block" >
                <a href=""><i class="fa fa-trash"></i>Delete </a>
              </button>
              <button class="btn d-block">
                <router-link to="/updatebook"
                  ><i class="fa fa-list" aria-hidden="true"></i
                  >Edit</router-link
                >
              </button>
              <button class="btn d-block">
                <router-link to="/addbookitem"
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
export default {
  name: "ManageBook",
  data() {
    return {
      books: [
        {
          id: 1,
          book_name: "Gulliver's Travel",
          book_descrip:
            "Cuoc song luon la nhung niem dau, vay thi tai sao khong dau di con di",
          quantity: "3",
        },
        {
          id: 2,
          book_name: "Gulliver's Travel",
          book_descrip:
            "Cuộc sống là những niềm đau. Tại sao không đau đi con đĩ",
          quantity: "3",
        },
        {
          id: 3,
          book_name: "Gulliver's Travel",
          book_descrip:
            "Cuộc sống là những niềm đau. Tại sao không đau đi con đĩ",
          quantity: "3",
        },
        {
          id: 4,
          book_name: "Gulliver's Travel",
          book_descrip:
            "Cuộc sống là những niềm đau. Tại sao không đau đi con đĩ",
          quantity: "3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.head {
  margin-top: 5%;
  .left button {
    margin-left: 2%;
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
  margin: 0% 0% 3% 0%;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.38);
    float: left;
  }

  i {
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