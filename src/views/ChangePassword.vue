<template>
  <div class="changepass">
    <img src="../assets/carousel/3.jpg" alt="./img/3.jpg" />
    <form
      @submit.prevent="changePassSubmit"
      class="changepass-form"
      action=""
      method=""
    >
      <h1>Change Password</h1>
      <div class="input-box">
        <span>Current Password:</span>
        <input
          id="myInput1"
          v-model="current_password"
          type="password"
          placeholder=""
        />
        <img
          class="eye"
          src="../assets/eye.svg"
          alt=""
          @click="myFunction1()"
        />
      </div>
      <div class="input-box">
        <span>New Password:</span>
        <input
          id="myInput2"
          v-model="password"
          type="password"
          placeholder=""
        />
        <img
          class="eye"
          src="../assets/eye.svg"
          alt=""
          @click="myFunction2()"
        />
      </div>
      <div class="input-box">
        <span>Confirm Password:</span>
        <input
          id="myInput3"
          v-model="confirmed_password"
          type="password"
          placeholder=""
        />
        <img
          class="eye"
          src="../assets/eye.svg"
          alt=""
          @click="myFunction3()"
        />
      </div>
      <div class="btn-box">
        <a href="">
          <button type="submit">Confirm</button>
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import user from "../store/modules/user";
import {
  toastError,
  toastMessage,
  toastSuccess,
} from "../utilities/toast-util";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "ChangePassword",
  computed: {
    ...mapGetters("user", {
      currentUser: "currentUser",
    }),
  },
  data() {
    return {
      current_password: "",
      password: "",
      confirmed_password: "",
    };
  },
  methods: {
    async changePassSubmit() {
      try {
        if (this.password == this.confirmed_password) {
          await this.$store.dispatch(`user/changePassword`, {
            current_password: this.current_password,
            password: this.confirmed_password,
            confirmed_password: this.confirmed_password,
          });
          toastSuccess("Change Password Successfully!");
        } else {
          toastMessage("Confirm Password is not correct. Try again!");
        }
      } catch (e) {
        toastError(e.response.data.meta.message);
      }
    },
    mounted: function() {
      if (!this.currentUser?.user_id || !this.currentUser?.token)
        this.$router.push("/login");
    },
    myFunction1() {
      var x = document.getElementById("myInput1");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none; /*ouline làm cho kh có viền trên input khi nhấp vào*/
  list-style: none;
  text-decoration: none;
  font-family: Lato, sans-serif;
}
body {
  width: 100%;
  height: 100%;
  background-attachment: fixed;
}
.changepass {
  height: 100vh;
  position: relative;
}
.changepass img {
  width: 100%;
  position: fixed;
}
.changepass-form .input-box > img {
  float: right;
  width: 6%;
  position: relative;
  left: 58%;
  margin-top: 0.3rem;
}
.changepass-form .input-box .eye {
  cursor: pointer;
}
/* COL-RIGHT H1 BANNER */
.changepass .changepass-form h1 {
  margin: 10% auto;
  font-family: Merriweather;
  font-weight: bold;
  padding-bottom: 15px;
  color: rgba(0, 0, 0, 0.87);
  font-size: x-large;
  text-align: center;
}
/* COL-RIGHT FORM */
.changepass .changepass-form {
  max-width: 390px;
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
.changepass .changepass-form .input-box {
  margin-bottom: 10%;
  font-size: medium;
}
.changepass .changepass-form .input-box span {
  color: rgba(0, 0, 0, 0.54);
  display: inline;
  font-size: small;
}
.changepass .changepass-form .input-box input {
  /* border: none; */
  width: 60%;
  float: right;
  font-size: 15px;
  background: #fafafa;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0.5% 0 0.5% 2%;
}
/* .changepass .changepass-form .input-box input::placeholder {
  color: #CECECE;
  font-style: italic; */
/*Edit Button*/
.changepass-form .btn-box {
  width: 100%;
  text-align: center;
}
.changepass-form .btn-box a button {
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
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 15%;
  transition: 0.4s;
}
.changepass-form .btn-box a button:hover {
  background: #ffe5c3;
  border-radius: 12px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
