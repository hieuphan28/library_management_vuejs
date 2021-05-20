import { createStore } from 'vuex';
import user from "./modules/user";
import category from './modules/category';
import department from './modules/department';
import book from './modules/book';
import bookitem from './modules/bookitem';
import reservation from './modules/reservation'

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    user,
    category,
    department,
    book,
    bookitem,
    reservation,
  }
})
