<template>
  <div class="container-fluid">
    <div class="search">
      Search results for
      <span>'{{search-result}} '</span>
    </div>

    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12 col-12"
        v-for="item in books"
        :key="item.id"
      >
        <router-link :to="{ path: '/bookinfo/' + item.book_id }">
          <div class="contain">
            <img class="book-cover" :src="item.thumbnail" alt="" />
          </div>
        </router-link>

        <div class="book-name">{{ item.book_name }}</div>
        <div class="row book-info">
          <div class="col-lg-6 col-md-6 col-sm-6 col-6 fee">
            {{ item.rent_cost + "$" }}
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-6">
            <router-link to="/cart" v-if="isMember">
            <i class="fas fa-shopping-cart"> </i> </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Books",
  computed: {
    ...mapGetters('book', ['books']),
    ...mapGetters("user", ["currentUser",  "isMember"])
  },
  mounted: function () {
    this.$store.dispatch("book/init");
  },
};
</script>

<style lang="scss" scoped>
.search {
  border-bottom: solid 1px rgba(0, 0, 0, 0.87);
  margin-top: 5%;
  font-size: large;
  padding-bottom: 1%;
  span {
    color: #897160;
    font-style: italic;
  }
}

.contain {
  border: solid 1px rgba(0, 0, 0, 0.87);
  display: block;
  width: 250px;
  height: 300px;
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
  }
}

.row {
  margin-top: 3%;
}
.book-cover {
  width: 100%;
  height: auto;
}
.book-name {
  padding-top: 3%;
  font-size: 20px;
  font-weight: bold;
}
.book-info {
  margin-top: 5%;
  padding-bottom: 20%;
  color: rgba(0, 0, 0, 0.54);
  align-items: center;

  i {
    color: rgba(0, 0, 0, 0.38);
    float: right;
    font-size: 20px;
    transition: 0.3s;
  }
  i:hover {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>

