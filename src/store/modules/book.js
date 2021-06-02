import * as bookService from '../../services/book-service';
import { checkContain } from '../../utilities/data-util';

const state = () => ({
    data: [],
});

const getters = {
    books: (state, getters) => {
        return state.data.sort((a, b) => {
            return new Date(b.create_date) - new Date(a.create_date);
        });
    },

    bookById: (state, getters) => (book_id) => {
        return state.data.filter(x => `${x.book_id}` === `${book_id}`)[0];
    },

    newBooks: (state, getters) => {
        return getters.books?.slice(0, 8);
    },

    allBooks: (state, getters) => {
        return state.data;
    },

    search: (state, getters) => query => {
        if (!query || query.trim().length < 1)
            return getters.books;

        return getters.books.filter(item => {
            const filterName = checkContain(item.book_name, query);
            const filterAuthor = checkContain(item.author, query);
            const filterDes = checkContain(item.description, query);
            
            return filterName || filterAuthor || filterDes;
        });
    }
}

const actions = {
    async init({state, commit}) {
        const data = await bookService.searchBook({});
        commit('setBooks', data);
    },

    async addBook({state, commit}, book) {
        const data = await bookService.addBook(book);    
        commit('addBook', data);
    },

    async searchBook({state, commit}, {query, skip, limit}) {
        const data = await bookService.searchBook({query, skip, limit});    
        commit('setBooks', data);
    },

    async updateBook({state, commit}, book) {
        const data = await bookService.updateBook(book) || book;
        commit('upsertBook', data);
    },

    async getBookById({state, commit}, book_id) {
        const data = await bookService.getBookById(book_id);
        commit('upsertBook', data);
    },

    async removeBook({state, commit}, book) {
        const data = await bookService.removeBook(book);   
        commit('removeBook', book);
    },

    async getBookByCategory({state, commit},cate_id) {
        const data = await bookService.getBookByCate(cate_id);
        commit('setBooks', data);
    },

    async getBookByDepart({state, commit}, depart_id) {
        const data = await bookService.getBookByDepart(depart_id);
        commit('setBooks', data)
    },
}

const mutations = {
    setBooks(state, data) {
        state.data = data instanceof Array && data || [];
    },
    
    addBook(state, book) {
        state.data.push(book);  
    },

    upsertBook(state, book) {
        const bookExistIndex = state.data.findIndex(x => x.book_id === book.book_id);
        (bookExistIndex !== -1) && (state.data[bookExistIndex] = book)
            || state.data.push(book);    
    },

    removeBook(state, book) {
        state.data = state.data.filter(x => x.book_id !== book.book_id); 
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

