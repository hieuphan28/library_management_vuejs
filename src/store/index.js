import { createStore } from 'vuex';
import user from "./modules/user";
import category from './modules/category';
import department from './modules/department';
import book from './modules/book';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    user,
    category,
    department,
    book,
  }
})
