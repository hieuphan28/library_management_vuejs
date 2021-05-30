import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import firebase from 'firebase/app'
import VueLoading from 'vue-loading-overlay';

firebase.initializeApp({
  apiKey: "AIzaSyCvzvejN5MKdcQj4w0J9QFxzKTmHYSuNg8",
  authDomain: "library-management-syste-4ecbb.firebaseapp.com",
  projectId: "library-management-syste-4ecbb",
  storageBucket: "library-management-syste-4ecbb.appspot.com",
  messagingSenderId: "617822062997",
  appId: "1:617822062997:web:36294bde7e4f4556ae0e9c",
  measurementId: "G-NPB6Y6BJ7B"
});

const app = createApp(App)
app.use(store)
app.use(router)
app.use(moshaToast)
app.use(VueLoading);
app.mount('#app')
