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
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 left">
          <div class="circle">
            <img src="../assets/Contact/Vector.png" alt="" />
          </div>
          <h1>ADDRESS</h1>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 right">
          8502 Inglewood, Maine 98380 <br />
          6391 Elgin St, Delaware 10299<br />
          2118 Thornridge Syracuse, Connecticut
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 left">
          <div class="circle">
            <img src="../assets/Contact/Vector-1.png" alt="" />
          </div>
          <h1>PHONE</h1>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 right">
          Please do not hesitate to contact us for more information via phone
          numbers below<br />
          +1-202-555-0185<br />
          +1-202-555-0156<br />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-12 left">
          <div class="circle">
            <img src="../assets/Contact/Vector-2.png" alt="" />
          </div>
          <h1>EMAIL</h1>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 right">
          Please do not hesitate to contact us for more information via emails
          below<br />
          danalibrary@gmail.com<br />
          library@danang.gov.vn<br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
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
    height: 110vh;
  }

  @include tablet {
    height: 70vh;
  }
  position: relative;
  height: 80vh;
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
.container .row .left {
  text-align: center;
  padding: 0%;
}
.circle img {
  width: 60px;
  // opacity: 90;
}

.right {
  padding: 0;
}
.container .row .left h1 {
  margin-top: 5%;
  font-size: large;
  color: white;
}
.right {
  // padding-right: 15%;
  color: rgb(255, 255, 255, 0.7);
}
</style>
