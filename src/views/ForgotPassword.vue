<template>
  <div class="forgotpassword0">
    <img src="../assets/carousel/3.jpg" alt="./img/3.jpg" />
    <form
      @submit.prevent="HandleSubmit"
      class="forgot0-form"
      action=""
      method=""
    >
      <div class="bar">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">
          <a href="" class="line">Sign Up</a>
        </router-link>
      </div>
      <h1>Forgot Password</h1>

      <!-- forgot password 1 -->
      <div class="forgot1" v-if="!isUsername" >
        <div class="input-box">
          <span>Username:</span>
          <input  type="string" placeholder="" required />
        </div>
        <div class="btn-box" @click="isUsername = !isUsername" > 
          <button type="submit" >Next</button>
        </div>
      </div>
      <!-- forgot password 2 -->
      <div class="forgot2" v-if="isUsername && !isCode">
        <span class="notice"
          >We have sent a code to your email. Please check you Inbox and enter
          the code here.</span
        >
        <div class="input-box">
          <span>Code:</span>
          <input type="string" placeholder="" required />
        </div>
        <div class="btn-box" @click="isCode= !isCode">
          <button type="submit" >Next</button>
        </div>
      </div>
      <!-- forgot password 3 -->
      <div class="forgot3" v-if="isCode">
        <div class="input-box">
          <span>New password:</span>
          <input type="password" placeholder="" required />
          <span>Confirmed password:</span>
          <input type="password" placeholder="" required />
        </div>
        <div class="btn-box">
          <button type="submit">Confirm</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ForgotPassword",
  data() {
      return{
          isUsername: false,
          isCode: false,
      }
  }
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
.forgotpassword0 {
  height: 80vh;
  position: relative;
  img {
    width: 100%;
    background-attachment: none;
    position: fixed;
  }

  .forgot0-form {
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

    .bar {
      margin-bottom: 5%;
      text-align: right;
      color: rgba(0, 0, 0, 0.38);
      padding: 0 0 20px 167px;
      font-size: 14px;
      a {
        padding-left: 5%;
        color: rgba(0, 0, 0, 0.38);
        text-decoration: none;
      }
      a:hover:not(.active) {
        color: rgba(0, 0, 0, 0.87) !important;
      }
    }

    h1 {
      margin-bottom: 5%;
      font-family: Merriweather;
      font-weight: bold;
      padding-bottom: 15px;
      color: rgba(0, 0, 0, 0.87);
      font-size: x-large;
      text-align: center;
    }
  }
}
.input-box {
  margin-bottom: 5%;
  padding: 0% 6%;
  input {
    /* border: none; */
    width: 100%;
    //   float: right;
    font-size: medium;
    background: #fafafa;
    border: 1px solid #cecece;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 1.5% 0 1.5% 2%;
  }
  span {
    color: rgba(0, 0, 0, 0.54);
    display: block;
    font-size: medium;
    margin-bottom: 5%;
  }
}
.btn-box {
  width: 100%;
  text-align: center;
  padding: 0% 6%;
  padding: 0.2rem 7.2rem;
  margin: 10px 0;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-bottom: 15%;
  transition: 0.4s;
  button {
    background: none;
    border: none;
    text-decoration: none;
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: small;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.54);
    outline: none;
  }
}
.btn-box:hover {
  background: #ffe5c3;
  border-radius: 12px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
