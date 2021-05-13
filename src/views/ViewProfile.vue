<template>
  <div class="personal">
    <img src="../assets/carousel/3.jpg" alt="./img/3.jpg" />
    <form
      @submit.prevent="handleSubmit(currentUser)"
      class="personal-form"
      action=""
      method=""
    >
      <h1>Personal Profile</h1>
      <div class="input-box">
        <span>User ID:</span>
        <input type="text" placeholder="id" readonly="true" v-model="currentUser.user_id"/>
      </div>
      <div class="input-box">
        <span>Username:</span>
        <input type="text" placeholder="username" readonly="true" v-model="currentUser.username"/>
      </div>
      <div class="input-box">
        <span>Email:</span>
        <input type="text" placeholder="email" v-model="currentUser.email" />
      </div>
      <div class="input-box">
        <span>Phone:</span>
        <input type="text" placeholder="phone" v-model="currentUser.phone"/>
      </div>
      <div class="input-box">
        <span>DOB:</span>
        <input type="text" placeholder="dob" v-model="currentUser.dob" />
      </div>
      <div class="input-box">
        <span>Address:</span>
        <input type="text" placeholder="address" v-model="currentUser.address" />
      </div>
      <div class="btn-box">
        <a href="./update.html">
          <button type="submit">Save</button>
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import user from '../store/modules/user';
import { toastError, toastMessage, toastSuccess } from '../utilities/toast-util';

export default {
  name: "ViewProfile",
  computed: {
    ...mapGetters('user',{
      currentUser: 'currentUser'
    })
  },
  methods: {
    handleSubmit: async function() {
      try {
        await this.$store.dispatch('user/updateProfile', this.currentUser);
        toastSuccess('Update successfully');
      } catch(e) {
        toastError(e.message);
      }
    }
  },
  mounted: function() {
    if (!this.currentUser?.user_id || !this.currentUser?.token) 
      this.$router.push('/login');
    this.$store.dispatch('user/getProfile');
  }
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
.personal {
  height: 100vh;
  position: relative;
}
.personal img {
  width: 100%;
  position: fixed;
}
/* COL-RIGHT H1 BANNER */
.personal .personal-form h1 {
  margin: 10% auto;
  font-family: Merriweather;
  font-weight: bold;
  padding-bottom: 15px;
  color: rgba(0, 0, 0, 0.87);
  font-size: x-large;
  text-align: center;
}
/* COL-RIGHT FORM */
.personal .personal-form {
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
.personal .personal-form .input-box {
  margin-bottom: 10%;
  font-size: medium;
}
.personal .personal-form .input-box span {
  color: rgba(0, 0, 0, 0.54);
  display: inline;
  font-size: small;
}
.personal .personal-form .input-box input:read-only {
  background-color: rgba(0, 0, 0, 0.1);
}
.personal .personal-form .input-box input {
  /* border: none; */
  width: 70%;
  float: right;
  font-size: medium;
  background: #fafafa;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0.5% 0 0.5% 2%;
}
.personal .personal-form .input-box input::placeholder {
  color: rgba(0, 0, 0, 0.38);
  font-style: italic;
}
/* .personal .personal-form .input-box input :read-only{
      background: black;
      color: black;
  }
   */
/*Edit Button*/
.personal-form .btn-box {
  width: 100%;
  text-align: center;
}
.personal-form .btn-box a button {
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
.personal-form .btn-box a button:hover {
  background: #ffe5c3;
  border-radius: 12px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
