import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import firebase from 'firebase/app'
import VueLoading from 'vue-loading-overlay';


firebase.initializeApp({
    apiKey: "AIzaSyDRSzUN5JG0izRubllBTClpmhaEV78DvkU",
    authDomain: "lib-management-c4811.firebaseapp.com",
    projectId: "lib-management-c4811",
    storageBucket: "lib-management-c4811.appspot.com",
    messagingSenderId: "120134528586",
    appId: "1:120134528586:web:6f803cc389e86cf33a40b3",
    measurementId: "G-7VCCJW1S3H"
  });

const app = createApp(App)
app.use(store)
app.use(router)
app.use(moshaToast)
app.use(VueLoading);
app.mount('#app')
