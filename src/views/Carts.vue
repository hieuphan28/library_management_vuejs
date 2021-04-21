<template>
  <div class="container">
    <div class="row cart-details">
      <div class="col-lg-3 col-md-3 col-sm-3 col-3 detail-left">
        <ul>
          <li>Today:</li>
          <li>Reserved Date:</li>
          <li>Time:</li>
          <li>Expected Return Date:</li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4 detail-middle">
        <ul>
          <li>{{ format_date(Date()) }}</li>
          <li>
            <input type="date" v-model="reservedDate" />
          </li>
          <li><input type="time" v-model="time" /></li>
          <li><input type="date" v-model="returnedDate" /></li>
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
    <div class="row info" v-for="cart in carts" :key="cart.id">
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <div>
          <img class="book-cover" src="../assets/book/gulliver.png" alt="" />
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-3 book-name">
        <div>
          {{ cart.book_name }}
          {{ reservedDate }}
          {{ time }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <div>
          {{ cart.quantity }}
        </div>
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
        <a> </a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Carts",
  data() {
    return {
      reservedDate: "",
      time: "",
      returnedDate: "",
      carts: [
        {
          id: 1,
          book_name: "Gulliver's Travel",
          quantity: "1",
          price: "$60",
          total: "$60",
        },
        {
          id: 2,
          book_name: "Gulliver's Travel",
          quantity: "1",
          price: "$60",
          total: "$60",
          date: "",
        },
      ],
    };
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
  },
  computed: {
    totalDate() {
      return (
        new Date(this.returnedDate).getDate() -
        new Date(this.reservedDate).getDate()
      );
    },
    totalMonth() {
      return (
        (new Date(this.returnedDate).getMonth() -
          new Date(this.reservedDate).getMonth()) *
        30
      );
    },
    showTotalRentFee() {
      return (this.totalDate + this.totalMonth) * 2;
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
      button:hover{
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
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        border: 1px solid;
        width: 25px;
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
      a {
        cursor: pointer;
        background: rgba(0, 0, 0, 0) url("~@/assets/Bin.png") no-repeat scroll 0
          center;
        position: relative;
        padding: 100%;
        margin: 0;
      }
      a:hover {
        background: rgba(0, 0, 0, 0) url("~@/assets/bin2.png") no-repeat scroll
          0 center;
        cursor: pointer;
        padding: 100%;
        margin: 0;
        position: relative;
      }
    }
  }
}
</style>
