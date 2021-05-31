<template>
  <div class="container">
    <form action="" @submit.prevent="startReserve">
      <div class="row cart-details">
        <div class="col-lg-3 col-md-3 col-sm-6 col-6 detail-left">
          <ul>
            <li>Reserved Date:</li>
            <li>Expected Return Date :</li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-6 col-6 detail-middle">
          <ul>
            <li>
              <input type="date" v-model="reserved_time" required />
              <span v-if="Date.now() <= new Date(reserved_time)"
                >Valid Date</span
              >
              <span v-if="Date.now() > new Date(reserved_time)"
                >Invalid Date! Please re-input</span
              >
            </li>
            <li>
              <input type="date" v-model="expected_return_date" required />
              <span
                v-if="new Date(reserved_time) <= new Date(expected_return_date)"
                >Valid Date</span
              >
              <span
                v-if="new Date(reserved_time) > new Date(expected_return_date)"
                >Invalid Date! Please re-input</span
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-12 detail-right">
          TOTAL:
          <div class="total-fee">${{ currentCart.total_fee }}</div>
          <button>Reserve</button>
        </div>
      </div>
    </form>
    <div class="row title">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2"></div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-3">NAME</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">QUANTITY</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">PRICE</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">TOTAL</div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-1"></div>
    </div>
    <div
      class="row info"
      v-for="book in currentCart.book_items_sum"
      :key="book.book_id"
    >
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <div>
          <img class="book-cover" :src="book.thumbnail" alt="" />
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-3 book-name">
        <div>
          {{ book.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <input
          type="number"
          v-model="book.quantity"
          @change="changeBookQuantity(book)"
        />
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ book.rent_cost }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 total">
        <div>{{ book.total_rent_cost }}</div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-1 icon">
        <button @click="clearReservationItem(book)">
          <img src="../assets/Bin.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import { toastError, toastSuccess } from "../utilities/toast-util";

export default {
  name: "Carts",
  computed: {
    ...mapGetters({
      currentCart: "reservation/currentCart",
    }),
  },
  data() {
    return {
      reserved_time: undefined,
      expected_return_date: undefined,
    };
  },
  methods: {
    async changeBookQuantity(book) {
      try {
        const bookData = bookitems2BookData(this.currentCart.book_items);
        const amount =
          book.quantity -
          bookData.find((item) => `${item.book_id}` === `${book.book_id}`)
            ?.quantity;

        if (amount > 0) {
          await this.$store.dispatch("reservation/addCurrentCartItem", {
            book_id: book.book_id,
          });
        }

        if (amount < 0) {
          await this.$store.dispatch("reservation/removeCurrentCartItem", {
            book_id: book.book_id,
            amount: Math.abs(amount),
          });
        }

        if (amount == 0) return;

        toastSuccess("Update successfully!");
      } catch (e) {
        throw toastError(e);
      }
    },

    async clearReservationItem(book) {
      try {
        await this.$store.dispatch("reservation/removeCurrentCartItem", {
          book_id: book.book_id,
          amount: -1,
        });

        toastSuccess("Update successfully!");
      } catch (e) {
        throw toastError(e);
      }
    },

    async startReserve() {
      try {
        if (
          this.reserved_time != undefined &&
          this.expected_return_date != undefined
        ) {
          if (
            Date.now() <= new Date(this.reserved_time) &&
            new Date(this.reserved_time) <= new Date(this.expected_return_date)
          ) {
            const reservation = {
              ...this.currentCart,
              reserved_time: this.reserved_time,
              expected_return_date: this.expected_return_date,
            };
            await this.$store.dispatch("reservation/borrow", reservation);

            toastSuccess("Request reserve successfully.");
          } else {
            toastError("Please try again");
          }
        }
      } catch (e) {
        toastError(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 200px;
  .cart-details {
    .detail-left {
      ul {
        li {
          padding: 5% 0 5% 0;
          font-weight: bold;
        }
      }
    }
    .detail-middle {
      ul {
        li {
          padding: 2.5% 0 2.5% 0;
        }
      }
    }
    .detail-right {
      font-weight: 600;
      display: flex;
      align-items: center;
      text-align: right;
      .total-fee {
        padding: 0 0 0 60px;
        border: none;
        margin-left: 5%;
        background-color: rgba(236, 236, 236, 1);
      }
      button {
        margin-left: 10px;
        padding: 5px 20px 5px 20px;
        border: none;
        border-radius: 5px;
        background-color: rgba(236, 212, 180, 1);
      }
      button:hover {
        background-color: rgba(255, 229, 195, 1);
      }
    }
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

    .book-cover {
      width: 70%;
    }
    .book-name {
      div {
        padding: 2%;
        color: rgba(0, 0, 0, 0.54);
      }
    }
    .book-quantity {
      input {
        width: 25%;
      }
    }
    .book-price {
      div {
        color: rgba(0, 0, 0, 0.54);
      }
    }
    .total {
      color: rgba(0, 0, 0, 0.54);
    }
    .icon {
      button {
        text-decoration: none;
        border: none;
        background: white;
        img {
          cursor: pointer;
          width: 60%;
        }
        img:hover {
          background-color: rgba(226, 226, 226, 0.5);
        }
      }
    }
  }
}
</style>
