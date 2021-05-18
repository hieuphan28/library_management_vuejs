<template>
  <header id="wn__header" class="header__area header__absolute sticky__header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 col-md-4 col-lg-2">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/logo.png" alt="logo images" />
            </router-link>
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
              <input type="text" placeholder="Search your books" />
              <a href="#"> <i class="fa fa-search" aria-hidden="true"></i></a>
            </li>
            <li class="shopcart" v-if="isMember">
              <router-link to="/cart" href="#"
                ><i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </router-link>
            </li>

            <li class="user dropdown">
              <a class="nav-link" data-toggle="dropdown" href="#"
                ><i class="fa fa-user" aria-hidden="true"></i
              ></a>
              <div class="dropdown-menu dropdown-menu-right" v-if="isLogged">
                <router-link to="/managebook" v-if="isAdmin"
                  ><a class="dropdown-item" href="#"
                    >Manage book</a
                  ></router-link
                >
                <router-link to="/issuebook" v-if="isAdmin"
                  ><a class="dropdown-item" href="#"
                    >Reserve book</a
                  ></router-link
                >
                <router-link to="/viewprofile" v-if="isLogged"
                  ><a class="dropdown-item" href="#"
                    >View Profile</a
                  ></router-link
                >
                <router-link to="/changepassword" v-if="isLogged"
                  ><a class="dropdown-item" href="#"
                    >Change Password</a
                  ></router-link
                >
                <router-link to="/login" v-if="isLogged" 
                  ><a class="dropdown-item" href="#" @click="clearCurrentUser"
                    >Logout</a
                  ></router-link
                >
                <!-- <router-link to="/login" v-if="!isLogged"
                  ><a class="dropdown-item" href="#" @click="clearCurrentUser"
                    >Login</a
                  ></router-link
                > -->
                <router-link
                  class="dropdown-item"
                  to="/borrow-history"
                  v-if="isMember"
                >
                  View Borrowing History</router-link
                >
              </div>
              <div class="dropdown-menu dropdown-menu-right" v-if="!isLogged">
                <router-link
                  to="/login"
                  class="dropdown-item"
                  href="#"
                  @click="clearCurrentUser"
                  >Login</router-link
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
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/books">BOOKS</router-link></li>
        <li class="mean-last"> <router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { UserRole } from "../common/bundleOfEnum";

export default {
  name: "Header",
  data(){
    return{
    showNav: false,
    }
  },
  computed: {
    ...mapGetters("user", ["currentUser", "isLogged", "isMember", "isAdmin"]),
  },
  methods: {
    ...mapMutations("user", ["clearCurrentUser"]),
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
  border: none;

  button {
    color: rgba(0, 0, 0, 0.54);
    background: #ecd4b4;
    margin-top: 28px;
    border: none;
    width: 60%;
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
  color: rgba(0, 0, 0, 0.54);
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
// .header__area .header__sidebar__right > li.user > a {
//   background: rgba(0, 0, 0, 0) url("~@/assets/icon_setting.png") no-repeat
//     scroll 0 center;
//   cursor: pointer;
//   font-size: 0;
//   position: relative;
//   width: 30px;
//   height: 100%;
// }
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

.shop_search a {
  color: rgba(0, 0, 0, 0.54);
}

.shop_search a i:hover {
  color: rgba(0, 0, 0, 0.87);
}

.shopcart a i {
  color: rgba(0, 0, 0, 0.54);
}

.shopcart a i:hover {
  color: rgba(0, 0, 0, 0.87);
}

.user {
  a {
    padding: 0;
    i {
      color: rgba(0, 0, 0, 0.54);
    }
  }
}
.user {
  .dropdown-menu {
    .dropdown-item {
      padding: 0.2rem 1rem;
    }
  }
}
.user a i:hover {
  color: rgba(0, 0, 0, 0.87);
}

.mainmenu__nav .meninmenu li a:hover {
  color: rgba(0, 0, 0, 0.54);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  text-decoration: none;
  outline: none;
}

// mobile menu
.mobile-menu {
  display: none;
  @include mobile {
    display: block;
  }
  @include tablet {
    display: block;
  }
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
      color: rgba(0, 0, 0, 0.54);
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
      color: rgba(0, 0, 0, 0.87);
    }
  }
}

.dropdown-menu-right {
  width: 210px;
  .dropdown-item {
    padding-left: 8%;
    color: rgba(0, 0, 0, 0.87);
  }

  .dropdown-item:hover {
    background-color: rgb(214, 214, 214);
  }

  a:hover {
    background: none;
    text-decoration: none;
  }
}
</style>
