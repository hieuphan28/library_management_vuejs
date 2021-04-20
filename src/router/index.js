import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import BookInfo from '../views/BookInfo.vue'
import Login  from '../views/Login.vue'
import BorrowingHistory  from '../views/BorrowingHistory.vue'
import BooksPage from '../views/BooksPage.vue'
import Carts  from '../views/Carts.vue'
import Register  from '../views/Register.vue'
import ViewProfile  from '../views/ViewProfile.vue'
import ChangePassword  from '../views/ChangePassword.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/bookinfo',
    name: 'BookInfo',
    component: BookInfo
  },
  {
    path: '/books',
    name: 'Book',
    component: BooksPage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/borrow-history',
    name: 'BorrowingHistory',
    component: BorrowingHistory
  },
  {
    path: '/cart',
    name: 'cart',
    component: Carts
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/viewprofile',
    name: 'viewprofile',
    component: ViewProfile
  },
  {
    path: '/changepassword',
    name: 'changepassword',
    component: ChangePassword
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
