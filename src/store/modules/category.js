import * as categoryService from '../../services/category-service';

const state = () => ({
    data: [],
});

const getters = {
    categories: (state, getters) => {
        return state.data;
    },

    categoryById: (state, getters) => (id) => {
        return state.data.filter(item => item.category_id === id)[0];
    },
}

const actions = {
    async addCategory({state, commit}, cate) {
        const data = await categoryService.addCategory(cate) || cate;    
        commit('addCategory', data);
    },

    async init({state, commit}) {
        const data = await categoryService.getCategories();
        commit('setCategories', data);
    }
}

const mutations = {
    setCategories(state, data) {
        state.data = data instanceof Array && data || [];
    },

    addCategory(state, cate) {
        state.data.push(cate);  
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}