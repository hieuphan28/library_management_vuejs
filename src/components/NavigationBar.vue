<template>
  <header id="wn__header" class="header__area header__absolute sticky__header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 col-md-4 col-lg-2">
          <div class="logo">
            <img src="../assets/logo.png" alt="logo images" />
          </div>
        </div>
        <div class="col-lg-6 mainmenu">
          <nav class="mainmenu__nav">
            <ul class="meninmenu">
              <li><router-link to="/">Home</router-link></li>
              <li>
                <router-link to="/books">Books</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-8 col-md-6 col-lg-4">
          <ul class="header__sidebar__right d-flex align-items-center">
            <li class="shop_search dropdown show">
              <button
                class="btn dropdown-toggle btn-sm"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Title
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Title</a>
                <a class="dropdown-item" href="#">Author</a>
              </div>
              <input type="text" placeholder="Search your books" />
              <a class="search__active" href="#"></a>
            </li>
            <li class="shopcart">
              <router-link to="/cart"
                ><a class="cartbox_active" href="#"></a
              ></router-link>
            </li>
            <li class="user dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              ></a>
              <div class="dropdown-menu dropdown-menu-right">
                <router-link to="/viewprofile"
                  ><a class="dropdown-item" href="#"
                    >View Profile</a
                  ></router-link
                >
                <router-link to="/changepassword"
                  ><a class="dropdown-item" href="#"
                    >Change Password</a
                  ></router-link
                >
                <router-link to="/login"
                  ><a class="dropdown-item" href="#">Logout</a></router-link
                >
                <router-link class="dropdown-item" to="/borrow-history">
                  View Borrowing Settings</router-link
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="col-2 col-md-2 nav-menu">
          <button @click="showNav = !showNav">
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
  <div class="mobile-menu" v-show="showNav">
    <nav class="mobile-nav">
      <ul class="mobile-item" style="">
        <li><a href="#">HOME</a></li>
        <li><a href="#">BOOKS</a></li>
        <li class="mean-last"><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Header",
  data: () => {
    return {
      showNav: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variable.scss/";
.mainmenu {
  @include mobile {
    display: none;
  }
  @include tablet {
    display: none;
  }
}
.nav-menu {
  display: none;
  @include mobile {
    display: block;
  }
  @include tablet {
    display: block;
  }
  text-align: right;
  cursor: pointer;
  text-decoration: none;

  button {
    background: #ecd4b4;
    margin-top: 23px;
    border-radius: 5px;
    width: 35%;
    height: auto;
  }
}
.nav-menu-item {
  padding-top: 10px;
}
.sticky__header {
  -webkit-animation: 0.4s ease-in-out 0s normal both 1 running fadeInDown;
  animation: 0.4s ease-in-out 0s normal both 1 running fadeInDown;
  background: rgba(0, 0, 0, 0.9) none repeat scroll 0 0;
  box-shadow: 0 0 5px #bdbdbd;
  left: 0;
  position: sticky;
  top: 0;
  transition: box-shadow 0.5s ease-in-out 0s;
  width: 100%;
  z-index: 99;
}
.header__area {
  background: #ecd4b4;
  opacity: 80%;
}
.header__area .logo {
  @include mobile {
  }
  height: 100%;
  line-height: 80px;
  display: block;
  box-sizing: border-box;
  position: relative;
  text-align: left;
}
.header__area .logo img {
  line-height: 90px;
  width: 60px;
  height: 60px;
  text-align: center;
}
.mainmenu__nav {
  align-items: center;
  align-self: ful;
  display: flex;
  height: 100%;
}
.mainmenu__nav .meninmenu {
  align-items: center;
  -ms-grid-row-align: stretch;
  align-self: stretch;
  margin: 0;
  padding: 0;
  display: flex;
}
.mainmenu__nav .meninmenu li {
  align-self: stretch;
  display: flex;
  margin: 15px 10px;
}
.mainmenu__nav .meninmenu li a {
  align-items: center;
  align-self: stretch;
  color: #333;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  padding: 0 25px;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
}

.header__area .header__sidebar__right {
  height: 100%;
  list-style: outside none none;
  /* position: relative; */
  z-index: 9;
  margin: 0;
  padding: 0;
  justify-content: space-between;
}
.header__area .header__sidebar__right > li {
  align-items: center;
  align-self: stretch;
  display: flex;
}
.header__area .header__sidebar__right > li.shopcart > a {
  background: rgba(0, 0, 0, 0) url("~@/assets/cart.png") no-repeat scroll 0
    center;
  cursor: pointer;
  font-size: 0;
  position: relative;
  height: 100%;
  width: 24px;
}
.header__area .header__sidebar__right > li.user > a {
  background: rgba(0, 0, 0, 0) url("~@/assets/icon_setting.png") no-repeat
    scroll 0 center;
  cursor: pointer;
  font-size: 0;
  position: relative;
  width: 30px;
  height: 100%;
}
.header__area .header__sidebar__right > li.shop_search > input[type="text"] {
  background: rgba(255, 255, 255, 0.8);
  // border-radius: 8px;
  text-decoration: none;
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
.header__area .header__sidebar__right > li.shop_search > a.search__active {
  background: rgba(0, 0, 0, 0) url("~@/assets/search.png") no-repeat scroll 0
    center;
  cursor: pointer;
  font-size: 0;
  position: relative;
  width: 30px;
  height: 100%;
}
.header__area .header__sidebar__right > li.shop_search > button.btn {
  background: rgba(255, 255, 255, 0.8);
  height: 46%;
  color: gray;
  padding: 6px;
  margin-top: 8px;
  margin-right: 0.1rem;
  font-size: 17px;
}

.mainmenu__nav .meninmenu li a:hover {
  background: rgba(137, 113, 96, 0.3);
  border-radius: 7px;
  text-decoration: none;
  outline: none;
}

.header__area .header__sidebar__right > li.shop_search > a:hover {
  background: rgba(0, 0, 0, 0) url("~@/assets/search_white.png") no-repeat
    scroll 0 center;
}
.header__area .header__sidebar__right > li.shopcart > a:hover {
  background: rgba(0, 0, 0, 0) url("~@/assets/cart_white.png") no-repeat scroll
    0 center;
}
.header__area .header__sidebar__right > li.user > a.search__active:hover {
  background: rgba(0, 0, 0, 0) url("~@/assets/icon_setting_white.png") no-repeat
    scroll 0 center;
}

// mobile menu
.mobile-menu {
  position: fixed;
  width: 100%;
  background: #ecd4b4;
  z-index: 10;
  .mobile-nav {
    .mobile-item {
      margin-bottom: 0;
      padding-left: 0;
    }
    li {
      list-style: none;
    }
    a {
      color: #333;
      display: flex;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 0 12px 30px;
      transition: all 0.4s ease 0s;
      border-top: 1px solid rgba(0, 0, 0, 0.04);
      text-decoration: none;
      text-align: right;
    }
    a:hover {
      color: white;
    }
  }
}
</style>