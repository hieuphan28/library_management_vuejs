<template>
  <div class="forgotpassword1">
    <img src="../assets/carousel/3.jpg" alt="./img/3.jpg" />
    <form
      @submit.prevent="HandleSubmit"
      class="forgot1-form"
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
      <span class="notice"
        >We have sent a code to your email. Please check you Inbox and enter the
        code here.</span
      >

      <div class="input-box">
        <span>Code:</span>
        <input v-model="username" type="string" placeholder="" required />
      </div>

      <div class="btn-box">
        <router-link to="forgotpassword2">
          <button type="submit">Next</button>
        </router-link>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ForgotPassword1",
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
.forgotpassword1 {
  height: 80vh;
  position: relative;
  img {
    width: 100%;
    background-attachment: none;
    position: fixed;
  }

  .forgot1-form {
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
    .notice{
        padding: 0% 6%;
        float: left;
        font-size: medium;
        color: rgba(0, 0, 0, 0.38);
        margin-bottom: 5%;
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
      a button {
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
      a button:hover {
        background: #ffe5c3;
        border-radius: 12px;
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
}
</style>
