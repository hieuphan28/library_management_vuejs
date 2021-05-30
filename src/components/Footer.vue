<template>
  <footer>
    <div class="container">
      <div class="row term">
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 address">
          <h1>ADDRESS</h1>
          <ul>
            <li>8502 Inglewood, Maine 98380</li>
            <li>6391 Elgin St, Delaware 10299</li>
            <li>2118 Thornridge Syracuse, Connecticut</li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12 opening">
          <h1>OPENING HOURS</h1>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
              <ul>
                <li>Monday to Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
              <ul>
                <li>9 AM to 9 PM</li>
                <li>9 AM to 6 PM</li>
                <li>9 AM to 2 PM</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 col-12 info">
          <h1>INFO and POLICY</h1>
          <div>Follow the following link to see more information about Danalib library and general policies</div>
          <router-link to="/policy">Info and Policy</router-link>
        </div>
      </div>

      <div class="company"> Copyright &copy; 2021 DANALIB All Rights Reserved</div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang='scss' scoped>
footer {
  bottom: 0;
  width: 100%;
  background-color: #ecd4b4;
  text-align: center;
  z-index: 100;
  position: relative;
}
footer .container {
  color: black;
  padding-top: 1.5%;
}
footer .container .company {
  font-size: medium;
  border-top: rgb(0,0,0, 0.10) 1px solid;
  padding: 1% 0%;
  color: rgb(0,0,0, 0.54);
}

footer .term{
  
  text-align: left;
  padding: 3% 0%;
  color: rgb(0,0,0, 0.54);
  h1{
    font-size: large;
    color: rgb(0,0,0, 0.60);
    font-weight: bold;
    text-align: left;
    margin-bottom: 6%;
  }
  ul li{
    font-size: medium;
    margin-bottom: 5%;
    color: rgb(0,0,0, 0.54);
  }

  .opening li{
    margin-bottom: 11%;
  }

  .info {
    div{
      margin-bottom: 5%;
    }
    a{
    color: rgb(0,0,0, 0.54);
  }
  }
}

</style>