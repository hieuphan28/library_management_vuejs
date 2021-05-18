<template>
  <div class="register">
    <img src="../assets/carousel/3.jpg" alt="./img/3.jpg" />
    <form
      @submit.prevent="HandleSubmit"
      class="create-account-form"
      action=""
      method=""
    >
      <div class="bar">
        <router-link to="/login">Login</router-link>
        <router-link to="/admin/register"
          ><a href="#" class="register-bar active">Sign Up</a>
        </router-link>
      </div>
      <h1>Create An Account - Admin</h1>
      <div class="input-box">
        <span>Username:</span>
        <input v-model="username" type="string" placeholder="" required />
        <img src="../assets/icon_setting.png" alt="" class="icon_user"/>
      </div>
      <div class="input-box">
        <span>Password:</span>
        <input
          id="myInput"
          v-model="password"
          type="password"
          placeholder=""
          required
          maxlength="8"
        />
        <img class="eye" src="../assets/eye.svg" alt="" @click="myFunction()" />
      </div>
      <div class="input-box">
        <span>Email:</span>
        <input v-model="email" type="string" placeholder="" required />
      </div>
      <div class="input-box">
        <span>Phone:</span>
        <input v-model="phone" type="string" placeholder="" required />
      </div>
      <div class="input-box">
        <span>DOB:</span>
        <input v-model="dob" type="date" placeholder="" required />
      </div>
      <div class="input-box">
        <span>Address:</span>
        <input v-model="address" type="string" placeholder="" required />
      </div>
      <div>
        <span id="Register"></span>
      </div>
      <div class="btn-box">
        <a href="">
          <button type="submit">Register</button>
        </a>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import user from "../store/modules/user";
import { toastError, toastMessage } from "../utilities/toast-util";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Register",
  computed: {
    ...mapGetters("user", {
      currentUser: "currentUser",
    }),
  },
  data() {
    return {
      userId: "",
      username: "",
      password: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      role: 1,
    };
  },
  methods: {
    HandleSubmit: async function() {
      try {
        await this.$store.dispatch("user/registerAdmin", {
          userId: this.userId,
          username: this.username,
          password: this.password,
          email: this.email,
          phone: this.phone,
          dob: this.dob,
          address: this.address,
          role: this.role,
        });
        console.log(response);
        toastSuccess("Register successfully");
      } catch (e) {
        toastError(e);
      }
    },
    myFunction() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none; /*ouline làm cho kh có viền trên input khi nhấp vào*/
  list-style: none;
  text-decoration: none;
  font-family: Lato, sans-serif;
}
.register {
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    background-attachment: none;
    position: fixed;
  }
}

/* COL-RIGHT H1 BANNER */
.register .create-account-form h1 {
  margin-bottom: 5%;
  font-family: Merriweather;
  font-weight: bold;
  padding-bottom: 15px;
  color: rgba(0, 0, 0, 0.87);
  font-size: x-large;
  text-align: center;
}
/* COL-RIGHT FORM */
.register .create-account-form {
  max-width: 430px;
  width: 100%;
  height: auto;
  /* font-size: 14px; */
  /* text-align: center; */
  background-color: #ffff;
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  padding: 30px 30px 20px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.register .create-account-form .input-box {
  // margin-bottom: 5%;
  margin-bottom: 10%;
}
.register .create-account-form .input-box span {
  color: rgba(0, 0, 0, 0.54);
  display: inline;
  font-size: small;
}
.register .create-account-form .input-box input {
  /* border: none; */
  width: 70%;
  float: right;
  font-size: medium;
  background: #fafafa;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 1.5% 0 1.5% 2%;
}
.create-account-form .input-box > img {
  float: right;
  width: 6%;
  position: relative;
  left: 68%;
  margin-top: 0.6rem;
}
.create-account-form .input-box > img.icon_user {
  width:5%;
}
.create-account-form .input-box .eye {
  cursor: pointer;
}
/*Edit Button*/
.create-account-form .btn-box {
  width: 100%;
  text-align: center;
}
.create-account-form .btn-box a button {
  width: 100%;
  padding: 0.2rem 7.2rem;
  margin: 10px 0;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  outline: none;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: small;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 15%;
  transition: 0.4s;
}
.create-account-form .btn-box a button:hover {
  background: #ffe5c3;
  border-radius: 12px;
  color: rgba(0, 0, 0, 0.87);
}
/* COL-RIGHT - BAR */
.create-account-form .bar {
  margin-bottom: 5%;
  text-align: right;
  color: rgba(0, 0, 0, 0.38);
  padding: 0 0 20px 167px;
  font-size: 14px;
}
.create-account-form .bar a {
  padding-left: 5%;
  color: rgba(0, 0, 0, 0.38);
  text-decoration: none;
}
/* Hover - Active*/
.create-account-form .bar a:hover:not(.active) {
  color: rgba(0, 0, 0, 0.87) !important;
}
.create-account-form .bar .active {
  border-left: rgba(0, 0, 0, 0.38) solid 0.1rem;
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>
