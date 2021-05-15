import * as bookService from '../../services/book-service';

const state = () => ({
    data: [],
});

const getters = {
    books: (state, getters) => {
        return state.data;
    },
}

const actions = {
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
        commit('updateBook', data);
    }
}

const mutations = {
    setBooks(state, data) {
        state.data = data instanceof Array && data || [];
    },
    
    addBook(state, book) {
        state.data.push(book);  
    },

    updateBook(state, book) {
        state.data.map(x => x.book_id === book.book_id ? book : x);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

