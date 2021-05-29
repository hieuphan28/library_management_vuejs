<template>
  <div class="contact">
    <div class="background">
      <img
        src="../assets/carousel/2.jpg"
        alt="background"
        title="brightness"
        class="brightness"
      />/>X
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 left-side">
          <div class="title">Business rules</div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 right-side">
          Before going to the library to borrow books, reader has to make a
          reservation first, along with information of date of reservation, and
          expected return date. After that, readers can go to the library and
          directly pick up their reservation.
          <br />When librarian issues books to customers, the librarian has to
          inform customers a deposit and the money received for the books to be
          borrowed. Money received = deposit + total rent fee of book items.
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 left-side">
          <div class="title">How to calculate the deposit?</div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 right-side">
          Deposit
          <br />
          = 2*total_fee (if the total rent fee of book items is less than or
          equal to $50) <br />
          = 3*total_fee (if $50 is less than the total rent fee of book items
          less than or equal to $100) <br />
          = 5*total_fee (if $100 is less than the total rent fee of book items
          less than or equal to $500) <br />
          = 10*total_fee (if the total rent fee of book items is greater than
          $500)
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 left-side">
          <div class="title">
            How to calculate the fine if you return books lately?
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 right-side">
          Based on the number of dates later than expected return date, your
          fine for 1 day for returning books lately will be calculated as
          followed:<br />
          $10 if the total rent fee of book items is less than or equal to $50.
          <br />$20 if $50 is less than the total rent fee of book items is less
          than or equal to $100.<br />
          $30 if $100 is less than the total rent fee of book items is less than
          or equal to $500. <br />
          $50 if the total rent fee of book items is greater than $500.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Policy",
};
</script>

<style lang='scss' scoped>
@import "../scss/_variable.scss/";

.background {
  img {
    background-color: rgb(0, 0, 0, 0.87);
    width: 2000px;
    /* height:88vh; */
    /* display:block; */
    background-attachment: none;
    position: fixed;
  }
  .brightness {
    filter: brightness(0.3);
  }
}

.contact {
  @include mobile {
    height: 120vh;
  }

  @include tablet {
    height: 110vh;
  }

  position: relative;
  height: 90vh;
  background-color: rgb(0, 0, 0, 0.87);
}
/* .contact .background img {
  width: 100%;
  position: fixed;
  background-attachment: fixed;
} */
.contact .container {
  position: relative;
}
.contact .container .row {
  margin-top: 5%;
}
.container .row .left-side {
  text-align: center;
  padding: 0%;
}

.right-side {
  padding: 0;
}
.container .left-side {
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    width: 70%;
    font-size: large;
    color: white;
    text-transform: uppercase;
    justify-content: center;
  }
}
.right-side {
  // padding-right: 15%;
  color: rgb(255, 255, 255, 0.7);
}
</style>