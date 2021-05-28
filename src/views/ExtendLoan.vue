<template>
  <div class="container">
    <div class="ex-title">EXTEND LOANS</div>
    <div class="row title">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">BORROWING ID</div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4">NAME</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">QUANTITY</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">PRICE</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">STATUS</div>
    </div>
    <div
      class="row info"
    >
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 borrowingID">
        <div>{{ reservation.reservation_id }}</div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4 book-name">
        <div v-for="bookInfo in reservation.book_items_sum" :key="bookInfo.book_id">
          {{ bookInfo.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <div v-for="bookInfo in reservation.book_items_sum" :key="bookInfo.book_id">
          {{ bookInfo.quantity }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ reservation.total_fee }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-status">
        <div :class="passEnumKey(reservation.status)">{{ passEnumKey(reservation.status) }}</div>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="passEnumKey(reservation.status) == 'BORROWING'"
      >
        <div>Borrowed Date: {{ reservation.borrowedDate }}</div>
        <div>Expected Date: {{ reservation.expectedDate }}</div>
      </div>
    </div>
    <!-- <div>
      <form class="extend-loan">
        <label for="newDate">Number of Days</label>
        <input type="text" id="newDate" />
        <div class="extend-option">
          <div>drop down button</div>
          <select name="" id="">
            <option
              :value="option.value"
              v-for="(option, index) in extendFee"
              :key="index"
            >
            {{option.day}}  -  {{option.fee}}  $
            </option>
          </select>
        </div>
      </form>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ReservationStatus } from '../common/bundleOfEnum';
import { getEnumKeyWithValue } from '../utilities/data-util';
export default {
  name: "ExtendLoan",
  computed: {
    ...mapGetters({
      reservationById: 'reservation/reservationById',
    }),
    reservation() {
      return this.reservationById(this.reservation_id) || {};
    }
  },
 
  mounted() {
    this.$store.dispatch('reservation/initCurrentReservations');
  },
  methods: {
    passEnumKey(status) {
      return getEnumKeyWithValue(ReservationStatus, status)
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  .ex-title {
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
    //   background: #ff9494 50%;
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
