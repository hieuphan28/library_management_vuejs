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

