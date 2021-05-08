<template>
  <div class="container">
    <!-- HEADER -->
    <div class="head">
      <div class="row">
        <div class="col-lg-1 col-md-1 col-sm-12 col-12 issue">
          <router-link to="/issuebook">Issue Book</router-link>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-12 col-12 return">
          <a href="">Return Book</a>
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12 col-12 lookfor">
          <input type="text" placeholder="Search username" />
          <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>

    <!-- TRANSACTION-INFO -->
    <div class="reserveinfo">
      <h1>RETURN BOOK</h1>
      <div class="form">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm- 6 col-6 name">
            <div class="reid">Reservation ID:</div>
            <div class="userI">UserID:</div>
            <div class="usernam">Username:</div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 col-6 data">
            <div class="reservationID">{{ reservationID }}</div>
            <div class="userID">{{ userID }}</div>
            <div class="username">{{ username }}</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-6 name">
            <div class="reid">Date of Reservation:</div>
            <div class="userI">Expected Return Date:</div>
            <div class="usernam">Total Fee:</div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 col-6 data">
            <div class="date-reserve">{{ datereserve }}</div>
            <div class="date-return">{{ datereturn }}</div>
            <div class="totalfee">{{ totalfee }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- MONEY -->
    <div class="money">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 left-side">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm- 6 col-6 name">
              <ul>
                <li>Return Date:</li>
                <li>Late:</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 input">
              <ul>
                <li><input type="text" placeholder="" /></li>
                <li><input type="text" placeholder="" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 right-side">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm- 6 col-6 name">
              <ul>
                <li>Money Receive:</li>
                <li>Money Exchange:</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-6 input">
              <ul>
                <li><input type="text" placeholder="" /></li>
                <li><input type="text" placeholder="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fine">
      
    </div>

    <!-- BOOK RESERVED -->
    <div class="book">
      <div class="row title">
        <div class="col-lg-2 col-md-2 col-sm-2 col-2">BOOK ITEM ID</div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4">NAME</div>
        <div class="col-lg-2 col-md-2 col-sm-1 col-1">RENT COST</div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-2">QUANTITY</div>
        <div class="col-lg-2 col-md-2 col-sm-1 col-1">TOTAL</div>
      </div>
      <div
        class="row info"
        v-for="bookTransaction in bookTransactions"
        :key="bookTransaction.id"
      >
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 bookitemiD">
          <div v-for="bookInfo in bookTransaction.bookInfos" :key="bookInfo.id">
            {{ bookInfo.bookitemiD }}
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-4 book-name">
          <div v-for="bookInfo in bookTransaction.bookInfos" :key="bookInfo.id">
            {{ bookInfo.book_name }}
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-1 col-1 book-rentcost">
          <div v-for="bookInfo in bookTransaction.bookInfos" :key="bookInfo.id">
            {{ bookInfo.rentcost }}
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
          <div v-for="bookInfo in bookTransaction.bookInfos" :key="bookInfo.id">
            {{ bookInfo.quantity }}
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-1 col-1 book-total">
          <div v-for="bookInfo in bookTransaction.bookInfos" :key="bookInfo.id">
            {{ bookInfo.total }}
          </div>
        </div>
      </div>

      <button class="btn">Return</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IssueBook",
  data() {
    return {
      reservationID: "12033",
      userID: "#78612",
      username: "Long Lus",
      datereserve: "12/3/2021",
      datereturn: "12/6/2021",
      totalfee: "$60",

      bookTransactions: [
        {
          id: 1,
          bookInfos: [
            {
              book_id: 1,
              bookitemiD: "#0123456",
              book_name: "Gulliver's Travel",
              rentcost: "60",
              quantity: "1",
              total: "60",
            },
            {
              book_id: 2,
              bookitemiD: "#0123456",
              book_name: "Gulliver's Travel",
              rentcost: "60",
              quantity: "1",
              total: "60",
            },
            {
              book_id: 3,
              bookitemiD: "#0123456",
              book_name: "Gulliver's Travel",
              rentcost: "60",
              quantity: "1",
              total: "60",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// HEADER
.head {
  margin-top: 5%;
  .issue {
    border: 1px rgba(0, 0, 0, 0.38) solid;
    font-size: medium;
    background: rgba(0, 0, 0, 0);
    color: rgb(0, 0, 0, 0.87);
    text-align: center;
    a {
      color: rgb(0, 0, 0, 0.54);
      text-decoration: none;
    }
    transition: 0.3s;
  }
  .return {
    border: 1px rgba(0, 0, 0, 0.38) solid;
    font-size: medium;
    background: rgba(0, 0, 0, 0.1);
    color: rgb(0, 0, 0, 0.87);
    text-align: center;
    a {
      color: rgb(0, 0, 0, 0.87);
      text-decoration: none;
    }
  }

  .issue:hover {
    background: rgba(0, 0, 0, 0.1);
    color: rgb(0, 0, 0, 0.87);
    text-align: center;
    a {
      color: rgb(0, 0, 0, 0.87);
      text-decoration: none;
    }
  }

  .lookfor {
    margin-top: 1%;
    text-align: right;
    input {
      background: rgba(255, 255, 255, 0);
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

// RESERVEINFO
.reserveinfo {
  margin-top: 3%;
  margin-left: 0;
  h1 {
    font-size: x-large;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid rgb(0, 0, 0, 0.54);
    padding-bottom: 2%;
  }

  .form {
    margin-top: 2%;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 2% 10%;
    .name {
      margin-left: 3%;
      font-weight: bold;
      margin-right: -6%;
    }
    .data {
      text-align: left;
    }
  }
}

//MONEY
.money {
  text-align: center;
  margin-top: 2%;
  .name {
    text-align: right;
    font-weight: bold;
    ul li{
      margin-top: 5% ;
    }
  }
  .input {
    text-align: left;
    input {
      border-radius: 8px;
      border: 0.25px solid rgba(0, 0, 0, 0.38);
      padding: 1% 0 1% 0;
    }

    ul li{
      margin-top: 4% ;
    }
  }
}

// BOOK
.book {
  margin-top: 3%;
  margin-bottom: 3%;
  .title {
    text-align: center;
    font-weight: 600;
  }
  .info {
    text-align: center;
    padding: 2% 0 2% 0;
    align-items: center;
    font-size: medium;
    color: rgb(0, 0, 0, 0.54);
    .bookitemiD {
      div {
        padding: 3%;
      }
    }
    .book-name {
      div {
        padding: 2%;
      }
    }
    .book-quantity {
      div {
        padding: 2%;
      }
    }
    .book-rentcost {
      div {
        padding: 2%;
      }
    }
    .book-total {
      div {
        padding: 2%;
      }
    }
  }
  .trash a i {
    text-align: center;
    color: rgb(0, 0, 0, 0.54);
    transition: 0.4s;
  }
}

.trash a i:hover {
  color: rgb(0, 0, 0, 0.87);
}

button {
  width: 13%;
  margin-left: 44%;
  background: rgba(236, 212, 180, 1);
  border-radius: 10px;
  padding: 0.5% 25px 0.75% 25px;
  color: rgba(0, 0, 0, 0.54);
  transition: 0.3s;
  font-weight: bold;
  
}
button:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}
</style>
