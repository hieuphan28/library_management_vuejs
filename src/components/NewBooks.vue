<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>New <b>Books</b></h2>
        <p class="intro">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered lebmid alteration in some ledmid form
        </p>
        <div
          id="myCarousel"
          class="carousel slide"
          data-ride="carousel"
          data-interval="0"
        >
          <!-- Carousel indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <!-- Wrapper for carousel items -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book1.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Apple iPad</h4>
                      <p class="item-price"><span>$369.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book2.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Sony Headphone</h4>
                      <p class="item-price"><span>$23.99</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book3.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Macbook Air</h4>
                      <p class="item-price"><span>$649.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book4.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Nikon DSLR</h4>
                      <p class="item-price"><span>$250.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book5.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Sony Play Station</h4>
                      <p class="item-price"><span>$269.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book6.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Macbook Pro</h4>
                      <p class="item-price"><span>$869.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book7.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Bose Speaker</h4>
                      <p class="item-price"><span>$99.00</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book8.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Samsung Galaxy S8</h4>
                      <p class="item-price"><span>$569.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-sm-3">
                  <div class="thumb-wrapper">
                    <div class="img-box">
                      <img
                        src="../assets/newbooks/book9.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="thumb-content">
                      <h4>Apple iPhone</h4>
                      <p class="item-price"><span>$349.00</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Carousel controls -->
          <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <i class="fa fa-angle-left"></i>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <i class="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewBooks",
};
</script>
<style scoped>
body {
  font-family: "Open Sans", sans-serif;
}
.intro {
  text-align: center;
  width: 50%;
  display: inline-block;
  margin-left: 25%;
  /* font-weight: bold; */
}
h2 {
  color: #000;
  font-size: 26px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  margin: 2% 0 2%;
  font-weight: bold;
}
h2 b {
  color: #ffc000;
}
.carousel {
  margin: 50px auto;
  padding: 0 70px;
}
.carousel .carousel-inner {
  height: 40vh;
}
.carousel .carousel-item {
  /* min-height: 330px; */
  /* margin-top:10%; */
  text-align: center;
  overflow: hidden;
}
.carousel .carousel-item .img-box {
  height: 20vh;
  width: 100%;
  position: relative;
}
.carousel .carousel-item img {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.carousel .carousel-item h4 {
  font-size: 18px;
  margin: 10px 0;
}
.carousel .thumb-wrapper {
  text-align: center;
}
.carousel .thumb-content {
  padding: 15px;
}
.carousel-control-prev,
.carousel-control-next {
  height: 33%;
  width: 3%;
  background: none;
  margin: auto 0;
}
.carousel-control-prev i,
.carousel-control-next i {
  font-size: 30px;
  position: absolute;
  top: 50%;
  display: inline-block;
  margin: -16px 0 0 0;
  z-index: 5;
  left: 0;
  right: 0;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  font-weight: bold;
}
.carousel-control-prev i {
  margin-left: -3px;
}
.carousel-control-next i {
  margin-right: -3px;
}
.carousel .item-price {
  font-size: 13px;
  padding: 2px 0;
}
.carousel .item-price span {
  color: #86bd57;
  font-size: 110%;
}
.carousel .carousel-indicators {
  bottom: -50px;
}
.carousel-indicators li,
.carousel-indicators li.active {
  width: 10px;
  height: 10px;
  margin: 4px;
  border-radius: 50%;
  border-color: transparent;
  border: none;
}
.carousel-indicators li {
  background: rgba(0, 0, 0, 0.2);
}
.carousel-indicators li.active {
  background: rgba(0, 0, 0, 0.6);
}
</style>