<template>
  <div id="slides" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" class="active"></li>
            <li data-target="#slides" data-slide-to="1"></li>
            <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/carousel/1.jpg" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
                <img src="../assets/carousel/2.jpg" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
                <img src="../assets/carousel/3.jpg" class="d-block w-100" alt="">
            </div>
        </div>
        <a class="carousel-control-prev" href="#slides" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#slides" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
    </div>
</template>

<script>
export default {
    name: "Carousel"

}
</script>

<style lang="scss" scoped>
@import "../scss/_variable.scss/";
.carousel-inner{
  height: 55vh;
  @include mobile{
      height:34vh;
  }
}
</style>