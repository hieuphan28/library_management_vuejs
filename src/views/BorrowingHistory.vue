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
      v-for="borrowHistory in borrowHistories"
      :key="borrowHistory.id"
    >
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 borrowingID">
        <div>{{ borrowHistory.borrowId }}</div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-4 book-name">
        <div v-for="bookInfo in borrowHistory.bookInfos" :key="bookInfo.id">
          {{ bookInfo.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <div v-for="bookInfo in borrowHistory.bookInfos" :key="bookInfo.id">
          {{ bookInfo.quantity }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ borrowHistory.price }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-status">
        <div :class="borrowHistory.status">{{ borrowHistory.status }}</div>
      </div>

      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="borrowHistory.status == 'Borrowing'"
      >
        <div>Borrowed Date: {{ borrowHistory.borrowedDate }}</div>
        <div>Expected Date: {{ borrowHistory.expectedDate }}</div>
      </div>
      <div
        class="col-lg-4 col-md-4 col-sm-4 col-4 book-extend d-flex"
        v-if="borrowHistory.status == 'Borrowing'"
      >
        <button><router-link to="/extendloan">Extend Loan</router-link></button>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="borrowHistory.status == 'Finished'"
      >
        <div>Borrowed Date: {{ borrowHistory.borrowedDate }}</div>
        <div>Returned Date: {{ borrowHistory.returnedDate }}</div>
      </div>
      <div
        class="col-lg-8 col-md-8 col-sm-8 col-8 book-date d-flex"
        v-if="borrowHistory.status == 'Reserved'"
      >
        <div>Reserved Date: {{ borrowHistory.reservedDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorrowingHistory",
  data() {
    return {
      borrowHistories: [
        {
          id: 1,
          borrowId: "#0123456",
          bookInfos: [
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
          bookInfos: [
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
          bookInfos: [
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
    .Borrowing {
      background: #fdffae;
      border-radius: 18px;
      padding: 0.5rem 0.5rem;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .Finished {
      background: rgba(135, 255, 115, 0.7);
      border-radius: 18px;
      padding: 0.5rem 0.5rem;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    .Reserved {
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
