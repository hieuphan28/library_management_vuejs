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
    addBook({state, commit}, book) {
        bookService.addBook(books, (data) => {
            commit('addBook', data);
        });
    },

    search({state, commit}, {query, skip, limit}) {
        bookService.searchBook({query, skip, limit}, data => {
            commit('setBooks', data);
        });
    }
}

const mutations = {
    setBooks(state, data) {
        state.data = data instanceof Array && data || [];
    },
    
    addBook(state, book) {
        state.data.push(book);  
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

