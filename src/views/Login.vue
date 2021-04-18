<template>
  <!-- <NavigationBar /> -->
  <div class="login ">
    <img src="" alt="background" />
    <form
      class="login-form "
      @submit.prevent="sendLoginInfo"
      action=""
      method=""
    >
      <div class="bar">
        <a href="#" class="login-bar active">Login</a>
        <a href="">Sign up</a>
      </div>
      <h1>Login</h1>
      <div class="input-box">
        <input v-model="username" type="text" placeholder="Username" />
        <img src="" alt="" />
      </div>
      <div class="input-box">
        <i></i>
        <input v-model="password" type="password" placeholder="Password" />
      </div>
      <div class="forgot-password">
        <a href="./forgot_password.html">Forgot password?</a>
      </div>
      <div class="btn-box">
        <a href="">
          <button type="submit">Login</button>
        </a>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    sendLoginInfo() {
      console.log(this.username,this.password);
      // console.log(this.password);
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
.login img {
  width: 100%;
  position: fixed;
}
/* COL-RIGHT */
.login-form h1 {
  margin: 10px;
  font-family: Merriweather;
  font-weight: bold;
  padding-bottom: 20px;
  color: black;
  font-size: x-large;
}
.login-form {
  max-width: 26%;
  width: 100%;
  height: auto;
  font-size: 14px;
  text-align: center;
  background-color: #ffff;
  border: 1px solid #E6E6E6;
  border-radius: 25px;
  padding: 30px 30px 20px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
.login-form .input-box > img {
  float: right;
  width: 7%;
  position: relative;
  margin-top: -25px;
}
.login-form .input-box {
  margin-bottom: 25px;
}
.login-form .input-box input {
  width: 100%;
  border: none;
  font-size: 15px;
  border-bottom: 1px solid #EFEFEF;
  border-radius: 0;
}
.login-form .input-box input::placeholder {
  color: #CECECE;
}
/* Edit Forgot Password*/
.login-form .forgot-password {
  text-align: right;
  margin-top: -3%;
  margin-bottom: 4%;
}
.login-form .forgot-password a {
  color: #CECECE;
}
/*Edit Button*/
.login-form .btn-box a button {
  padding: 0.2rem 7.2rem;
  margin: 10px 0;
  background: #ECD4B4;
  border: 1px solid #B7B7B7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  outline: none;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  color: #897160;
  margin-bottom: 15%;
  width: 100%;
  transition: 0.4s;
}
.login-form .btn-box a button:hover {
  background: #DDB176;
  border-radius: 12px;
  color: white;
}
/* .col-left{
    border: black solid 10px;
}
.col-right{
    border: red solid 10px;
} */
/* <--------------------------------------------------------------------------> */
/*Edit login-Sign up bar*/
.login-form .bar {
  margin-bottom: 10%;
  text-align: right;
  color: #EFEFEF;
  padding: 0 0 20px 167px;
}
.login-form .bar a {
  padding: 0 5%;
  color: #CECECE;
  text-decoration: none;
}
/* Hover - Active*/
.login-form .bar a:hover:not(.active) {
  color: #898989 !important;
}
.login-form .bar .active {
  border-right: #CECECE solid 0.1rem;
  color: #898989 !important;
}
/* COL-LEFT */
</style>