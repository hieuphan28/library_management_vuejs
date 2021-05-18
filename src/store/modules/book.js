import * as bookService from '../../services/book-service';

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

    async search({state, commit}, {query, skip, limit}) {
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
    }
}

const mutations = {
    setBooks(state, data) {
        state.data = data instanceof Array && data || [];
    },
    
    addBook(state, book) {
        state.data.push(book);  
    },

    upsertBook(state, book) {
        const bookExist = state.data.filter(x => x.book_id === book.book_id)[0];
        bookExist && state.data.map(x => x.book_id === book.book_id ? book : x)
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

