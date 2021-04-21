<template>
  <div class="contact">
    <!-- <div class="background"><img src="./img/backcontact.png" alt="./img/3.jpg" /></div> -->
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-3 left">
          <div class="circle"><img src="../assets/Contact/Vector.png" alt="" /></div>
          <h1>ADDRESS</h1>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-9 right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est
          lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-3 left">
          <div class="circle"><img src="../assets/Contact/Vector-1.png" alt="" /></div>
          <h1>PHONE</h1>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-9 right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est
          lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-3 left">
          <div class="circle"><img src="../assets/Contact/Vector-2.png" alt="" /></div>
          <h1>EMAIL</h1>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-9 right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est
          lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style>
.contact {
  position: relative;
  height: 100vh;
  background-color:rgb(0, 0, 0, 0.87);
}
/* .contact .background img {
  width: 100%;
  position: fixed;
  background-attachment: fixed;
} */
.contact .container {
  padding: 5% 5%;
}
.contact .container .row {
  margin-top: 5%;
}
.container .row .left {
  text-align: center;
}
.circle img {
  width: 25%;
  opacity: 90%;
}
.container .row .left h1 {
  margin-top: 5%;
  font-size: large;
  color: white;
}
.right {
  padding-right: 15%;
  color: rgb(255, 255, 255, 0.7);
}
</style>