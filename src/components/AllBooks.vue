<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>All <b>Books</b></h2>
        <p class="intro">
          Explore all our books here, with all information and accessibility to
          library materials. What are you waiting for? Start your adventure now!
        </p>
        <div
          id="myCarousel1"
          class="carousel slide"
          data-ride="carousel"
          data-interval="0"
        >
          <!-- Carousel indicators -->
          <ol class="carousel-indicators">
            <li
              data-target="#myCarousel1"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#myCarousel1" data-slide-to="1"></li>
            <li data-target="#myCarousel1" data-slide-to="2"></li>
          </ol>
          <!-- Wrapper for carousel items -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div
                  class="col-sm-3"
                  v-for="item in books.slice(i + 10, i + 14)"
                  :key="item.id"
                >
                  <div class="thumb-wrapper">
                    <router-link :to="{ path: '/bookinfo/' + item.book_id }">
                      <div class="img-box">
                        <img :src="item.thumbnail" class="img-fluid" alt="" />
                      </div>
                    </router-link>
                    <div class="thumb-content">
                      <p>{{ item.book_name }}</p>
                      <p class="item-price">
                        <span>{{ "$" + item.rent_cost }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div
                  class="col-sm-3"
                  v-for="item in books.slice(i + 5, i + 9)"
                  :key="item.id"
                >
                  <div class="thumb-wrapper">
                    <router-link :to="{ path: '/bookinfo/' + item.book_id }">
                      <div class="img-box">
                        <img :src="item.thumbnail" class="img-fluid" alt="" />
                      </div>
                    </router-link>
                    <div class="thumb-content">
                      <p>{{ item.book_name }}</p>
                      <p class="item-price">
                        <span>{{ "$" + item.rent_cost }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div
                  class="col-sm-3"
                  v-for="item in books.slice(i, i + 4)"
                  :key="item.id"
                >
                  <div class="thumb-wrapper">
                    <router-link :to="{ path: '/bookinfo/' + item.book_id }">
                      <div class="img-box">
                        <img :src="item.thumbnail" class="img-fluid" alt="" />
                      </div>
                    </router-link>
                    <div class="thumb-content">
                      <p>{{ item.book_name }}</p>
                      <p class="item-price">
                        <span>{{ "$" + item.rent_cost }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Carousel controls -->
          <a
            class="carousel-control-prev"
            href="#myCarousel1"
            data-slide="prev"
          >
            <i class="fa fa-angle-left"></i>
          </a>
          <a
            class="carousel-control-next"
            href="#myCarousel1"
            data-slide="next"
          >
            <i class="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="allbook">
        <router-link to="/books"
          ><button class="btn d-block">All Books</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AllBooks",
  computed: {
    ...mapGetters({
      books: "book/books",
    }),
  },
  data() {
    return {
      i: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/_variable.scss/";
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
  margin: 3% 0 2%;
  font-weight: bold;
}
h2 b {
  color: #ffc000;
}
#title {
  text-align: center;
  width: 50%;
  display: inline-block;
  margin-left: 25%;
  font-weight: bold;
}
.carousel {
  margin: 2% auto;
  padding: 0 70px;
  min-width: 100%;
}
.carousel .carousel-inner {
  height: 50%;
}
.carousel .carousel-item {
  text-align: center;
  width: 100%;
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
.carousel .carousel-item p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.carousel .thumb-wrapper {
  text-align: center;
  /* font-size: 100%; */
}
.carousel .thumb-content {
  /* padding: 15px; */
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
  /* padding: 2px 0; */
  /* width:100%; */
}
.carousel .item-price span {
  color: #86bd57;
  font-size: 110%;
}
.carousel .carousel-indicators {
  bottom: -50px;
  @include mobile {
    bottom: -30px;
  }
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

.wrapper {
  margin: 5% 0%;
  text-align: center;
  .allbook {
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    a {
      text-decoration: none;
    }

    button {
      background: #ecd4b4;
      border: 1px solid #b7b7b7;
      box-sizing: border-box;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.54);
    }
    button:hover {
      background: #ffe5c3;
    }
  }
}
</style>
