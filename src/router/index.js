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
import Contact from '../views/Contact.vue'
import ExtendLoan from '../views/ExtendLoan.vue'
import ManageBook from '../views/ManageBook.vue'
import AddBook from '../views/AddBook.vue'
import AddBookItem from '../views/AddBookItem.vue'
import UpdateBook from '../views/UpdateBook.vue'
import IssueBook from '../views/IssueBook.vue'
import ReturnBook from '../views/ReturnBook.vue'
import AddCategory from '../views/AddCategory.vue'
import AddDepartment from '../views/AddDepartment.vue'
import ForgotPassword0 from '../views/ForgotPassword0.vue'
import ForgotPassword1 from '../views/ForgotPassword1.vue'
import ForgotPassword2 from '../views/ForgotPassword2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookinfo/:book_id',
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
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/extendloan',
    name: 'extendloan',
    component: ExtendLoan
  },
  {
    path: '/managebook',
    name: 'managebook',
    component: ManageBook
  },
  {
    path: '/addbook',
    name: 'addbook',
    component: AddBook
  },
  {
    path: '/addbookitem',
    name: 'addbookitem',
    component: AddBookItem
  },
  {
    path: '/updatebook',
    name: 'updatebook',
    component: UpdateBook
  },
  {
    path: '/issuebook',
    name: 'issuebook',
    component: IssueBook
  },
  {
    path: '/returnbook',
    name: 'returnbook',
    component: ReturnBook
  },
  {
    path: '/addcategory',
    name: 'addcategory',
    component: AddCategory
  },
  {
    path: '/adddepartment',
    name: 'adddepartment',
    component: AddDepartment
  },
  {
    path: '/forgotpassword0',
    name: 'forgotpassword0',
    component: ForgotPassword0
  },
  {
    path: '/forgotpassword1',
    name: 'forgotpassword1',
    component: ForgotPassword1
  },
  {
    path: '/forgotpassword2',
    name: 'forgotpassword2',
    component: ForgotPassword2
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
