<template>
  <div class="container">
    <div class="page-title">BORROWING HISTORY</div>
    <div class="row title">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">BORROWING ID</div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4">NAME</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">QUANTITY</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">PRICE</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">STATUS</div>
    </div>
    <div
      class="row info"
      v-for="reservationItem in reservations"
      :key="reservationItem.reservation_id"
    >
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 borrowingID">
        <div>{{ reservationItem.reservation_id }}</div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4 book-name">
        <div v-for="book in preProcessBookItems(reservationItem.book_items)" :key="book.book_id">
          {{ book.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <div v-for="book in preProcessBookItems(reservationItem.book_items)" :key="book.book_id">
          {{ book.quantity }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ reservationItem.total_fee }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-status">
        <div :class="passEnumKey(reservationItem.status)">{{ passEnumKey(reservationItem.status) }}</div>
      </div>

      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="reservationItem.status == ReservationStatus.BORROWING"
      >
        <div>Borrowed Date: {{ reservationItem.borrowedDate }}</div>
        <div>Expected Date: {{ reservationItem.expectedDate }}</div>
      </div>
      <div
        class="col-lg-4 col-md-4 col-sm-4 col-4 book-extend d-flex"
        v-if="reservationItem.status == ReservationStatus.BORROWING"
      >
        <button><router-link :to="`/extendloan/${reservationItem.reservation_id}`">Extend Loan</router-link></button>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="reservationItem.status == ReservationStatus.CLOSED"
      >
        <div>Borrowed Date: {{ reservationItem.borrowedDate }}</div>
        <div>Returned Date: {{ reservationItem.returnedDate }}</div>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="reservationItem.status == ReservationStatus.RESERVED"
      >
        <div>Reserved Date: {{ reservationItem.reservedDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { toastError, toastSuccess } from '../utilities/toast-util';
import { ReservationStatus } from '../common/bundleOfEnum'
import { bookitems2BookData, getEnumKeyWithValue } from '../utilities/data-util'

export default {
  name: "BorrowingHistory",
  computed: {
    ...mapGetters({
      reservations: 'reservation/currentReservations'
    })
    // reservations() {
    //   return this.currentReservation() || []
    // },
  },

  data() {
    return {
      ReservationStatus,
      borrowHistories: [
        {
          id: 1,
          borrowId: "#0123456",
          bookitems: [
            { book_id: 1, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 2, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 3, book_name: "Gulliver's Travel", quantity: "1" },
          ],
          price: "$60",
          status: "Borrowing",
          borrowedDate: "7/02/2021",
          expectedDate: "11/02/2021",
          reservedDate: "7/02/2021",
          returnedDate: "11/02/2021",
        },
        {
          id: 2,
          borrowId: "#7654321",
          bookitems: [
            { book_id: 1, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 2, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 3, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 4, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 5, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 6, book_name: "Gulliver's Travel", quantity: "1" },
          ],
          price: "$90",
          status: "Finished",
          borrowedDate: "7/02/2021",
          expectedDate: "11/02/2021",
          reservedDate: "7/02/2021",
          returnedDate: "11/02/2021",
        },
        {
          id: 3,
          borrowId: "#7654321",
          bookitems: [
            { book_id: 1, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 2, book_name: "Gulliver's Travel", quantity: "1" },
            { book_id: 3, book_name: "Gulliver's Travel", quantity: "1" },
          ],
          price: "$90",
          status: "Reserved",
          borrowedDate: "7/02/2021",
          expectedDate: "11/02/2021",
          reservedDate: "7/02/2021",
          returnedDate: "11/02/2021",
        },
      ],
    };
  },
  mounted() {

  },
  methods: {
    passEnumKey(status) {
      return getEnumKeyWithValue(ReservationStatus, status)
    },

    preProcessBookItems(bookitems) {
      return bookitems2BookData(bookitems);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  .page-title {
    text-align: center;
    font-weight: 600;
    padding: 5%;
    font-size: 25px;
  }
  .title {
    text-align: center;
    font-weight: 600;
  }
  .info {
    text-align: center;
    padding: 2% 0 2% 0;
    align-items: center;
    border-bottom: 1px solid #00000099;

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
    .BORROWING {
      background: #fdffae;
      border-radius: 18px;
      padding: 0.5rem 0.5rem;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .CLOSED {
      background: rgba(135, 255, 115, 0.7);
      border-radius: 18px;
      padding: 0.5rem 0.5rem;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .RESERVED {
      background: #ff9494 50%;
      border-radius: 18px;
      padding: 0.5rem 0.5rem;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .book-date {
      div {
        padding: 5% 4% 0 4%;
      }
    }
    .book-extend {
      padding: 2.5% 4% 0 4%;

      button {
        margin-left: auto;
        border-radius: 8px;
        padding: 2%;
        border: none;
        background-color: rgba(236, 212, 180, 1);
        a {
          text-decoration: none;
          color: black;
        }
      }
      button:hover {
        background-color: rgba(255, 229, 195, 1);
      }
    }
  }
}
</style>
