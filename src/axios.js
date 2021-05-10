import axios from "axios";


axios.defaults.baseURL="https://lit-everglades-79316.herokuapp.com/api/";
axios.defaults.headers.common["Authorization"]=  "Bearer" + localStorage.getItem("token");