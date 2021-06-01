<template>
<PageLoader class="page-loader" />
  <div class="container">
    <div class="page-title">BORROWING HISTORY</div>
    <div class="row title">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 title-view">
        BORROWING ID
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4 title-view">NAME</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 title-view">QUANTITY</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 title-view">PRICE</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 title-view">STATUS</div>
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
        <div v-for="book in reservationItem.book_items_sum" :key="book.book_id">
          {{ book.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <div v-for="book in reservationItem.book_items_sum" :key="book.book_id">
          {{ book.quantity }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ reservationItem.total_fee }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-status">
        <div :class="passEnumKey(reservationItem.status)">
          {{ passEnumKey(reservationItem.status) }}
        </div>
      </div>

      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="reservationItem.status == ReservationStatus.BORROWING"
      >
        <div>Borrowed Date: {{ reservationItem.reserved_time }}</div>
        <div>Expected Date: {{ reservationItem.expected_return_date }}</div>
      </div>
      <div
        class="col-lg-4 col-md-4 col-sm-4 col-4 book-extend d-flex"
        v-if="reservationItem.status == ReservationStatus.BORROWING"
      >
        <button v-if="!reservationItem.is_extended">
          <router-link :to="`/extendloan/${reservationItem.reservation_id}`"
            >Extend Loan</router-link
          >
        </button>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="reservationItem.status == ReservationStatus.CLOSED"
      >
        <div>Borrowed Date: {{ reservationItem.reserved_time }}</div>
        <div>Returned Date: {{ reservationItem.returned_date }}</div>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="reservationItem.status == ReservationStatus.RESERVED"
      >
        <div>Reserved Date: {{ reservationItem.reserved_time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util";
import { ReservationStatus } from "../common/bundleOfEnum";
import PageLoader from "../components/PageLoader.vue";
import {
  bookitems2BookData,
  getEnumKeyWithValue,
} from "../utilities/data-util";

export default {
  name: "BorrowingHistory",
  components: {
    PageLoader,
  },
  computed: {
    ...mapGetters({
      reservations: "reservation/currentReservations",
    }),
  },

  data() {
    return {
      ReservationStatus,
    };
  },
  mounted() {
    this.$store.dispatch("reservation/initCurrentReservations");
  },
  methods: {
    passEnumKey(status) {
      return getEnumKeyWithValue(ReservationStatus, status);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variable.scss/";

.container {
  @include mobile {
    font-size: x-small;
  }
  min-height: calc(100vh - 95px); 
  .page-title {
    text-align: center;
    font-weight: 600;
    padding: 5%;
    font-size: 25px;
  }
  .title {
    text-align: center;
    font-weight: 600;
    .title-view {
      @include mobile {
        padding-right: 0.1rem;
      }
    }
  }
  .info {
    text-align: center;
    padding: 2% 0 2% 0;
    align-items: center;
    border-bottom: 1px solid #00000099;

    .borrowingID {
      div {
        @include mobile {
          width: 2.5rem;
        }
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
        // background: rgba(226, 226, 226, 0.5);
        // border-radius: 18px;
        // padding: 0.5rem 0.5rem;
        // @include mobile {
        //   padding-right: 0.1rem;
        // }
      }
    }
    .book-status {
      font-size: medium;
      @include tablet {
        font-size: small;
      }

      @include mobile {
        font-size: x-small;
        padding-left: 0!important;

      }
    }
    .BORROWING {
      background: #fdffae;
      border-radius: 8px;
      padding: 0.5rem 0.5rem;
      width: 8rem;
      margin-left: auto;
      margin-right: auto;
      @include mobile {
        width: 4rem;
      }
    }
    .CLOSED {
      background: rgba(135, 255, 115, 0.7);
      border-radius: 8px;
      padding: 0.5rem 0.5rem;
      width: 8rem;
      margin-left: auto;
      margin-right: auto;
      @include mobile {
        width: 4rem;
      }
    }
    .RESERVED {
      background: #ff9494 50%;
      border-radius: 8px;
      padding: 0.5rem 0.5rem;
      width: 8rem;
      margin-left: auto;
      margin-right: auto;
      @include mobile {
        width: 4rem;
      }
    }
    .book-date {
      div {
        padding: 5% 4% 0 4%;
      }
    }
    .book-extend {
      padding: 2.5% 4% 0 4%;

      button {
        @include mobile{
          width:3rem;
        }
        margin-left: auto;
        border-radius: 8px;
        padding: 2%;
        border: none;
        background-color: rgba(236, 212, 180, 1);
        transition: 0.3s;
        a {
          text-decoration: none;
          color: rgb(0, 0, 0, 0.54);
        }
      }
      button:hover {
        background-color: rgba(255, 229, 195, 1);
        color: rgb(0, 0, 0, 0.87);
      }
    }
  }
}
</style>
