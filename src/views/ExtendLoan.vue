<template>
  <div class="container">
    <!-- NEW CODE -->
    <div class="ex-title">EXTEND LOANS</div>
    <div class="row extendinfo">
      <div class="col-lg-6 col-md-6 col-sm-6 col-6 lable">
        <ul>
          <li>Reservation ID:</li>
          <li>Borrowing Date:</li>
          <li>Expected Return Date:</li>
        </ul>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-6 data">
        <ul>
          <li>{{ reservation.reservation_id }}</li>
          <li>{{ reservation.reserved_time }}</li>
          <li>{{ reservation.expected_return_date }}</li>
        </ul>
      </div>
    </div>
    <div class="note">
      <ul>
        <li>
          Each reservation is allowed to be extended only once. You can extend
          your loan up to 5 days.
        </li>
        <li>
          If you return your items later than the time you are supposed to, you
          are required to pay a fine. To calculate the fine, please refer to
          Policy.
        </li>
      </ul>
    </div>
    <div class="numberdays">
      <label for="newDate">Number of day extended:</label>
      <input type="text" v-model="numberOfDayExtend" id="newDate" />
    </div>
    <div class="table">
      <div class="row name">
        <div class="col-lg-3 col-md-4 col-sm-4 col-4 id">BOOK ITEM ID</div>
        <div class="col-lg-9 col-md-8 col-sm-8 col-8">NAME</div>
      </div>
      <div class="row data">
        <div class="col-lg-3 col-md-4 col-sm-4 col-4 id">
          <div
            v-for="bookInfo in reservation.book_items_sum"
            :key="bookInfo.book_id"
          >
            {{ bookInfo.book_item_id }}
          </div>
        </div>
        <div class="col-lg-9 col-md-8 col-sm-8 col-8">
          <div
            v-for="bookInfo in reservation.book_items_sum"
            :key="bookInfo.book_id"
          >
            {{ bookInfo.book_name }}
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="extend">
        <button class="btn d-block" @click="startExtend">Extend</button>
      </div>
    </div>
    <!-- OLD CODE -->
    <!-- <div class="row title">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">BORROWING ID</div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4">NAME</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">QUANTITY</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">PRICE</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">STATUS</div>
    </div>
    v-for="borrowHistory in borrowHistories"
      :key="borrowHistory.id"
    <div class="row info">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 borrowingID">
        <div>{{ reservation.reservation_id }}</div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4 book-name">
        <div
          v-for="bookInfo in reservation.book_items_sum"
          :key="bookInfo.book_id"
        >
          {{ bookInfo.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <div
          v-for="bookInfo in reservation.book_items_sum"
          :key="bookInfo.book_id"
        >
          {{ bookInfo.quantity }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ reservation.total_fee }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-status">
        <div :class="passEnumKey(reservation.status)">
          {{ passEnumKey(reservation.status) }}
        </div>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="passEnumKey(reservation.status) == 'BORROWING'"
      >
        <div>Borrowed Date: {{ reservation.borrowedDate }}</div>
        <div>Expected Date: {{ reservation.expectedDate }}</div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ReservationStatus } from "../common/bundleOfEnum";
import { getEnumKeyWithValue } from "../utilities/data-util";
import { toastError, toastInfo, toastSuccess } from '../utilities/toast-util';
export default {
  name: "ExtendLoan",
  computed: {
    ...mapGetters({
      reservationById: "reservation/reservationById",
    }),
    reservation() {
      return this.reservationById(this.reservation_id) || {};
    },
  },
  data() {
    return {
      reservation_id: this.$route.params.reservation_id,
      numberOfDayExtend: undefined,
    };
  },
  mounted() {
    this.$store.dispatch("reservation/initCurrentReservations");
  },
  methods: {
    passEnumKey(status) {
      return getEnumKeyWithValue(ReservationStatus, status);
    },

    async startExtend() {
      try {
        if (!this.reservation 
        // || this.reservation.is_extended 
          || !this.numberOfDayExtend || this.numberOfDayExtend > 5) {
          toastInfo("This reservation or the number of day extend is not valid.");
          return;
        } 

        const newExpectReturned = new Date(this.reservation?.expected_return_date);
        newExpectReturned.setDate(newExpectReturned.getDate() + parseInt(this.numberOfDayExtend));

        await this.$store.dispatch('reservation/extend', {
          ...this.reservation,
          expected_return_date: newExpectReturned.toISOString(),
        });

        toastSuccess('Extend loan successfully.');
        this.$router.push('/borrow-history');
      } catch(e) {
        toastError(e);
      }
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/_variable.scss/";
.container {
  .ex-title {
    text-align: center;
    font-weight: 600;
    padding: 2%;
    font-size: x-large;
    border-bottom: solid 1px rgb(0, 0, 0, 0.87);
  }
  // NEW CODE
  .extendinfo {
    font-size: medium;
    margin-top: 1%;
    .lable {
      @include mobile {
        padding-left: 3rem;
      }
      @include tablet {
        padding-left: 5rem;
      }
      padding-left: 18rem;
      font-weight: bold;
    }
    .data {
      @include mobile {
        padding-left: 3rem;
      }
      @include tablet {
        padding-left: 5rem;
      }
      padding-left: 8rem;
    }
  }
  .note {
    font-size: medium;
    color: rgb(0, 0, 0, 0.54);
    padding-left: 1%;
  }
  .numberdays {
    label {
      margin-right: 3%;
      font-weight: bold;
    }
    input {
      width: 80px;
      border: solid 0.5px rgb(0, 0, 0, 0.54);
      border-radius: 3px;
      padding: 0 0.5%;
    }
    padding-left: 1%;
    padding-bottom: 3%;
    border-bottom: solid 1px rgb(0, 0, 0, 0.87);
  }
  .table {
    margin-top: 3%;
    .name {
      font-weight: bold;
      font-size: large;
    }
    .data {
      color: rgb(0, 0, 0, 0.54);
    }
    .id {
      text-align: center;
    }
  }
  .wrapper {
    margin: 5% 0%;
    text-align: center;
    .extend {
      font-weight: bold;
      cursor: pointer;
      display: inline-block;
      a {
        text-decoration: none;
      }
      button {
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
  // OLD CODE
  .title {
    text-align: center;
    font-weight: 600;
  }
  .info {
    text-align: center;
    padding: 2% 0 2% 0;
    align-items: center;
    // border-bottom: 1px solid #00000099;
    .borrowingID {
      div {
        border-radius: 18px;
        background: rgba(226, 226, 226, 0.5);
        padding: 0.5rem 0.5rem;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .book-name {
      div {
        padding: 2%;
      }
    }
    .book-quantity {
      div {
        padding: 3%;
      }
    }
    .book-price {
      div {
        text-align: center;
        align-items: center;
        position: relative;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        background: rgba(226, 226, 226, 0.5);
        border-radius: 18px;
        padding: 0.5rem 0.5rem;
      }
    }
    .book-status {
    }
    .Borrowing {
      background: rgba(226, 226, 226, 0.5);
      border-radius: 18px;
      padding: 0.5rem 0.5rem;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    // .Finished {
    //   background: rgba(135, 255, 115, 0.7);
    //   border-radius: 18px;
    //   padding: 0.5rem 0.5rem;
    //   width: 80%;
    //   margin-left: auto;
    //   margin-right: auto;
    // }
    // .Reserved {
    //   background: #FF9494 50%;
    //   border-radius: 18px;
    //   padding: 0.5rem 0.5rem;
    //   width: 80%;
    //   margin-left: auto;
    //   margin-right: auto;
    // }
    .book-date {
      div {
        padding: 5% 4% 0 4%;
      }
    }
  }
}
</style>