<template>
  <div class="container">
    <!-- HEADER -->
    <div class="head">
      <div class="row">
        <div class="col-lg-1 col-md-12 col-sm-12 col-12 issue">
          <router-link to="/issuebook">
            <button>Issue Book</button></router-link
          >
        </div>
        <div class="col-lg-1 col-md-12 col-sm-12 col-12 return">
          <router-link to="/returnbook"
            ><button>Return Book</button></router-link
          >
        </div>
        <div class="col-lg-10 col-md-10 col-sm-12 col-12 lookfor">
          <input type="text" placeholder="Search username" v-model="usernameTextSearch"/>
          <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>

    <h1>ISSUE BOOK</h1>

    <div
      v-for="reservation in reservations"
      :key="reservation.reservation_id"
    >
      <!-- TRANSACTION-INFO -->
      <div class="reserveinfo">
        <div class="form">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm- 6 col-6 name">
              <div class="reid">Reservation ID:</div>
              <div class="userI">UserID:</div>
              <div class="usernam">Username:</div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-6 data">
              <div class="reservationID">{{ reservation.reservation_id }}</div>
              <div class="userID">{{ reservation.user_id }}</div>
              <div class="username">{{ reservation.user?.username }}</div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-6 name">
              <div class="reid">Date of Reservation:</div>
              <div class="userI">Expected Return Date:</div>
              <div class="usernam">Total Fee:</div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-6 data">
              <div class="date-reserve">
                {{ reservation.reserved_time || "null" }}
              </div>
              <div class="date-return">
                {{ reservation.expected_return_date || "null" }}
              </div>
              <div class="totalfee">{{ reservation.total_fee }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- MONEY -->
      <div class="money">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm- 6 col-6 name">
            <ul>
              <li>Deposit:</li>
              <li>Money Receive:</li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6 input">
            <ul>
              <li>
                <input
                  type="text"
                  placeholder=""
                  :value="reservation.deposit"
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder=""
                  :value="reservation.receive_money"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- BOOK RESERVED -->
      <div class="book">
        <div class="row title">
          <div class="col-lg-2 col-md-2 col-sm-2 col-2">BOOK ITEM ID</div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-4">NAME</div>
          <div class="col-lg-2 col-md-2 col-sm-1 col-1">RENT COST</div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-2">QUANTITY</div>
          <div class="col-lg-2 col-md-2 col-sm-1 col-1">TOTAL</div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-1"></div>
        </div>
        <!-- v-for="book in reservation.book_items_sum"
          :key="book.id" -->
        <div class="row info">
          <div class="col-lg-2 col-md-2 col-sm-2 col-2 bookitemiD">
            <div v-for="book in reservation.book_items_sum" :key="book.book_id">
              {{ book.book_id }}
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 col-4 book-name">
            <div v-for="book in reservation.book_items_sum" :key="book.book_id">
              {{ book.book_name }}
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-1 col-1 book-rentcost">
            <div v-for="book in reservation.book_items_sum" :key="book.book_id">
              {{ book.rent_cost }}
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
            <div v-for="book in reservation.book_items_sum" :key="book.book_id">
              {{ book.quantity }}
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-1 col-1 book-total">
            <div v-for="book in reservation.book_items_sum" :key="book.book_id">
              {{ book.total_rent_cost }}
            </div>
          </div>
          <div class="col-lg-1 col-md-1 col-sm-1 col-1 trash">
            <!-- <div v-for="book in reservation.book_items_sum" :key="book.book_id">
              <a href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
            </div> -->
          </div>
        </div>
        <div class="wrapper" @click="issueBook(reservation)">
          <div class="issuebutton">
            <button class="btn">Issue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { checkContain } from '../utilities/data-util';
import { toastError, toastSuccess } from "../utilities/toast-util";
export default {
  name: "IssueBook",
  computed: {
    ...mapGetters({
      issueReservations: "reservation/issueReservations",
      returnReservations: "reservation/returnReservations",
    }),

    reservations() {
      return this.reservationData;
    },
  },
  data() {
    return {
      usernameTextSearch: undefined,
      reservationData: undefined,
    };
  },
  methods: {
    async issueBook(reservation) {
      try {
        await this.$store.dispatch(
          "reservation/issueReservation",
          reservation.reservation_id
        );

        toastSuccess("Issue Successfully!");
      } catch (e) {
        toastError(e);
      }
    },

    searchByUsername() {
      if (this.usernameTextSearch) {
        this.reservationData = this.issueReservations.filter(item => checkContain(item.user?.username, this.usernameTextSearch));
        return;
      }

      this.reservationData = this.issueReservations;
    }
  },
  async mounted() {
    try {
      this.reservationData = this.issueReservations;
      await this.$store.dispatch("reservation/getIssue");
      this.reservationData = this.issueReservations;
    } catch(e) {
      toastError(e);
    }
  },
  watch: {
    usernameTextSearch: 'searchByUsername'
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variable.scss/";
// HEADER
.head {
  margin-top: 5%;
  .issue {
    button {
      width: 100%;
      border: 1px rgba(0, 0, 0, 0.38) solid;
      font-size: medium;
      background: rgba(0, 0, 0, 0.1);
      color: rgb(0, 0, 0, 0.87);
      text-align: center;
    }
    a {
      color: rgb(0, 0, 0, 0.87);
      text-decoration: none;
    }
  }
  .return {
    button {
      width: 100%;
      border: 1px rgba(0, 0, 0, 0.38) solid;
      font-size: medium;
      background: rgba(0, 0, 0, 0);
      color: rgb(0, 0, 0, 0.87);
      text-align: center;
    }
    a {
      color: rgb(0, 0, 0, 0.54);
      text-decoration: none;
    }
    transition: 0.3s;
  }

  .return button:hover {
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
      padding: 0.5% 1% 0.5% 1%;
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

h1 {
  font-size: x-large;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.54);
  padding-bottom: 2%;
}

// RESERVEINFO
.reserveinfo {
  margin-top: 3%;
  // margin-left: 0;

  .form {
    width: 80%;
    margin-top: 2%;
    // text-align: center;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 2% 3%;
    position: relative;
    left: 11%;
    .name {
      padding-left: 3%;
      float: left;
      font-weight: bold;
      // margin-right: -6%;
    }
    .data {
      text-align: left;
      padding-left: 0;
    }
  }
}

//MONEY
.money {
  margin-top: 2%;

  .name {
    font-weight: bold;
    float: right;
    ul li {
      @include mobile {
        padding-left: 4rem;
      }

      @include tablet {
        padding-left: 10rem;
      }
      padding-left: 20rem;
      text-align: left;
      padding-bottom: 2.3%;
    }
  }
  .input {
    text-align: left;

    ul li {
      padding-bottom: 1%;
    }
    input {
      border-radius: 5px;
      border: 0.25px solid rgba(0, 0, 0, 0.38);
      padding: 0.5% 0 0.5% 2%;
    }
  }
}

// BOOK
.book {
  margin-top: 3%;
  border-bottom: solid rgba(0, 0, 0, 0.87) 1px;
  .title {
    text-align: center;
    font-weight: 600;
    @include mobile {
      font-size: small;
    }
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

.wrapper {
  margin: 3% 0%;
  text-align: center;
  .issuebutton {
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    width: 100px;
    button {
      width: 100%;
      background: #ecd4b4;
      border: 1px solid #b7b7b7;
      box-sizing: border-box;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.54);
    }
    button:hover {
      background: #ffe5c3;
    }
  }
}
</style>
