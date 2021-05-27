import { BookStatus } from '../../common/bundleOfEnum';
import LibException from '../../exceptions/lib-exception';
import * as bookItemService from '../../services/bookitem-service';
import { getEnumKeyWithValue } from "../../utilities/data-util";

const state = () => ({
    data: [],
});

const sortByDate = (a,b) => new Date(b.create_date) - new Date(a.create_date);

const getters = {
    bookItem: (state, getters) => {
        return state.data.map(item => {
            item.status_key = getEnumKeyWithValue(BookStatus, item.status);
            return item;
        });
    },

    bookItemByBookId: (state, getters) => (book_id) => {
        return getters.bookItem.filter(x => `${x.book_id}` === `${book_id}`);
    },

    bookItemQuantityByBookId: (state, getters) => book_id => {
        return getters.bookItemByBookId(book_id).length;
    },

    bookItemAvailableByBookId: (state, getters) => book_id => {
        return getters.bookItemByBookId(book_id)
            .filter(x => `${x.status}` === `${BookStatus.AVAILABLE}`).length;
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
        data.forEach(item => {
            commit('upsertBookItem', item);
        });
    },

    async addBookItem({state, commit}, bookitem) {
        const data = await bookItemService.addBookItem(bookitem);
        commit('upsertBookItem', data);
    },

    async updateBookItem({state, commit}, bookitem) {
        const data = await bookItemService.updateBookItem(bookitem);
        commit('upsertBookItem', data);
    }, 

    async removeBookItem({state, commit}, bookitem) {
        if (`${bookitem?.status}` !== `${BookStatus.AVAILABLE}`)
            throw new LibException('This bookitem is in used');
        const data = await bookItemService.removeBookItem(bookitem) || bookitem;
        commit('removeBookItem', data);
    }
}

const mutations = {
    upsertBookItem(state, bookitem) {
        const existIndex = state.data.findIndex(x => x.book_item_id === bookitem.book_item_id);
        (existIndex !== -1) && (state.data[existIndex] = bookitem)
            || state.data.push(bookitem);
    },

    removeBookItem(state, bookitem) {
        state.data = state.data.filter(x => x.book_item_id !== bookitem.book_item_id); 
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}

