<template>
  <div class="container">
    <div class="row cart-details">
      <div class="col-lg-3 col-md-3 col-sm-3 col-3 detail-left">
        <ul>
          <li>Reserved Date:</li>
          <li>Expected Return Date :</li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4 detail-middle">
        <ul>
          <li>
            <input type="date" v-model="reservedDate" />
            <span v-if="Date.now() < new Date(reservedDate)">Valid Date</span>
            <span v-if="Date.now() >= new Date(reservedDate)"
              >Invalid Date! Please re-input</span
            >
          </li>
          <li>
            <input type="date" v-model="returnedDate" />
            <span v-if="new Date(reservedDate) < new Date(returnedDate)"
              >Valid Date</span
            >
            <span v-if="new Date(reservedDate) >= new Date(returnedDate)"
              >Invalid Date! Please re-input</span
            >
          </li>
        </ul>
      </div>
      <div class="col-lg-5 col-md-5 col-sm-5 col-5 detail-right">
        TOTAL:
        <div class="total-fee">${{ showTotalRentFee }}</div>
        <button>Reserve</button>
      </div>
    </div>
    <div class="row title">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2"></div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-3">NAME</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">QUANTITY</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">PRICE</div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">TOTAL</div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-1"></div>
    </div>
    <div class="row info" v-for="(cart, index) in cart" :key="index">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <div>
          <img class="book-cover" src="../assets/book/gulliver.png" alt="" />
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-3 book-name">
        <div>
          {{ cart.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <input type="number" v-model="cart.quantity" />
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ cart.price }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 total">
        <div>{{ cart.total }}</div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-1 icon">
        <button @click="removeFromCart(index)">
          <img src="../assets/Bin.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import items from "../store/item.js";

export default {
  name: "Carts",
  data() {
    return {
      reservedDate: "",
      returnedDate: "",
      checkDate: false,
      cart: []
    };
  },
 
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 200px;
  .cart-details {
    .detail-left {
      ul {
        li {
          padding: 5% 0 5% 0;
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
