<template>
  <!-- <NavigationBar /> -->
 <div class="login ">
      <img class="background" src="../assets/carousel/2.jpg" alt="background" />
      <form class="login-form " action="" method="">
          <div class="bar">
            
            <router-link to ="/login"><a href="#" class="login-bar active">Login</a></router-link>
            <router-link to ="/register"><a href="#">Sign up</a></router-link>
          </div>
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" />
          <img src="../assets/icon_setting_white.png" alt="" />
        </div>
        <div class="input-box">
          <i></i>
          <input type="password" placeholder="Password" />
        </div>
        <div class="forgot-password">
          <a href="#">Forgot password?</a>
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
  // data() {
  //   return {
  //     username: "",
  //     password: "",
  //   };
  // },
  // methods: {
  //   sendLoginInfo() {
  //     console.log(this.username,this.password);
  //     // console.log(this.password);
  //   },
  // },
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
.login .background {
 width:2000px;
 /* height:88vh; */
 /* display:block; */
 background-attachment: none;
 position:fixed;
}
/* COL-RIGHT */
.login-form h1 {
  margin: 10px;
  font-family: Merriweather;
  font-weight: bold;
  padding-bottom: 20px;
  color:rgba(0, 0, 0, 0.87);
  font-size: x-large;
}
.login-form {
  max-width: 390px;
  width: 100%;
  height: auto;
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
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  border: none;
  font-size:medium ;
  border-bottom: 1px solid #EFEFEF;
  border-radius: 0;
}
.login-form .input-box input::placeholder {
  color: rgba(0, 0, 0, 0.38);
  font-style: italic;
}
/* Edit Forgot Password*/
.login-form .forgot-password {
  text-align: right;
  margin-top: -3%;
  margin-bottom: 4%;
  font-size: 14px;
}
.login-form .forgot-password a {
  color: rgba(0, 0, 0, 0.38);;
}
/*Edit Button*/
.login-form .btn-box a button {
  padding: 0.2rem 7.2rem;
  margin: 10px 0;
  background: #ECD4B4;
  border: 0.25px solid #B7B7B7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  outline: none;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
  font-size: small ;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 15%;
  width: 100%;
  transition: 0.3s;
}
.login-form .btn-box a button:hover {
    background: #FFE5C3;
    border-radius: 12px;
    color: rgba(0, 0, 0, 0.87);
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
  font-size: 14px;
}
.login-form .bar a {
  padding: 0 5%;
  color: rgba(0, 0, 0, 0.38);
  text-decoration: none;
}
/* Hover - Active*/
.login-form .bar a:hover:not(.active) {
  color: rgba(0, 0, 0, 0.87) !important;
}
.login-form .bar .active {
  border-right: rgba(0, 0, 0, 0.38) solid 0.1rem;
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>