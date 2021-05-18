<template>
  <div class="container">
    <form @submit.prevent="addDepartSubmit" class="add-category-form" action="" method="">
      <div class="row back">
        <router-link to="/managebook"
          ><i class="fa fa-arrow-left" aria-hidden="true"></i
        ></router-link>
      </div>
      <div class="title">Add Department</div>
      <input type="text" class="input" v-model="department_name" />
      <div class="row bt">
        <button class="btn">
         <i class="fa fa-plus"></i>Add Department
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import department from "../store/modules/department"
import { toastSuccess, toastError } from "../utilities/toast-util";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "AddDepartment",
  data(){
    return {
      department_name: "",
    }
  },
  methods:{
    async addDepartSubmit(){
      try{
        await this.$store.dispatch("department/addDepartment",{
          department_name:this.department_name,
        });
        toastSuccess("Add Department Successfully!")
      } catch(e){
        toastError(e)
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.back {
  margin-left: 1px;
  margin-bottom: 5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 76.3vh;
  margin: 3% 0;
}

.add-category-form {
  max-width: 550px;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #ffff;
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  padding: 30px 30px 20px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 55%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  .back {
    i {
      color: rgba(0, 0, 0, 0.38);
    }
    i:hover {
      color: rgba(0, 0, 0, 0.87);
    }
  }
}

.title {
  margin: 5% 0%;
  font-weight: bold;
  font-size: x-large;
}

input {
  width: 90%;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 1% 1%;
  margin-bottom: 5%;
}

.bt {
  margin-left: 35%;
  margin-top: 2%;
  margin-bottom: 5%;
}
button {
  text-align: center;
  width: 45%;
  background: #ecd4b4;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 1% 0 1.5% 0;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.38);
    font-size: small;
    // box-shadow: rgba(0, 0, 0, 0.38) ;
  }

  i {
    color: rgba(0, 0, 0, 0.38);
    font-size: small;
    margin-right: 5%;
  }
}

button:hover {
  background: #ffe5c3;
  color: rgba(0, 0, 0, 0.87);
}
</style>