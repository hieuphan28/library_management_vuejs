<template>
  <div class="container">
    <div class="cart-details">cart details</div>
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
      v-for="cart in carts"
      :key="cart.id"
    >
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 ">
        <div><img class="book-cover" src="../assets/book/gulliver.png" alt="" /></div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-3 book-name">
        <div>
          {{ cart.book_name }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-quantity">
        <div >
          {{ cart.quantity }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 book-price">
        <div>
          {{ cart.price }}
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2 total">
        <div >{{ cart.total }}</div>
      </div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-1 icon">
        <div >icon</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: "Carts",
    data() {
    return {
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
        },
       
      ],
    };
  },

}
</script>

<style lang="scss" scoped>

.container {
  .cart-details {
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

    .book-cover {
        width: 70%;    
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
    .total {
    }
    .icon{
 
    }
    
    
  }
}
</style>
