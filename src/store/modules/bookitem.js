import * as bookItemService from '../../services/bookitem-service';

const state = () => ({
    data: [],
});

const sortByDate = (a,b) => new Date(b.create_date) - new Date(a.create_date);

const getters = {
    bookItem: (state, getters) => {
        return state.data;
    },

    bookItemByBookId: (state, getters) => (book_id) => {
        return state.data.filter(x => `${x.book_id}` === `${book_id}`);
    },
}

const actions = {
    async countBookItemByBookId({state, commit}, book) {
        const count = await bookItemService.countBookItemByBookId(book);
        const bookData = {
            ...book,
            quantity: count
        }
        commit('book/upsertBook', bookData, { root: true });
    },

    async getBookItemByBookId({state, commit}, book_id) {
        const data = await bookItemService.getBookItemByBookId(book_id);
        commit('addBulkBookItem', data);
    },

    async addBookItem({state, commit}, bookitem) {
        const data = await bookItemService.addBookItem(bookitem);
        commit('addBookItem', data);
    },

    async updateBookItem({state, commit}, bookitem) {
        const data = await bookItemService.updateBookItem(bookitem);
        commit('upsertBookItem', data);
    }, 
}

const mutations = {
    addBookItem(state, bookitem) {
        state.data.push(bookitem);
    },

    addBulkBookItem(state, bookitems) {
        bookitems.forEach(item => {
            state.data.push(item);
        });
    },

    upsertBookItem(state, bookitem) {
        const existIndex = state.data.findIndex(x => x.book_item_id === bookitem.book_item_id);
        (existIndex !== -1) && (state.data[existIndex] = bookitem)
            || state.data.push(bookitem);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

