import * as departmentService from '../../services/department-service';

const state = () => ({
    data: [],
});

const getters = {
    departments: (state, getters) => {
        return state.data;
    },

    departmentById: (state, getters) => (id) => {
        return state.data.filter(item => item.department_id === id)[0];
    },
}

const actions = {
    async addDepartment({state, commit}, depart) {
        const data = await departmentService.addDepartment(depart) || depart;    
        commit('addDepartment', data);
    },

    async init({state, commit}) {
        const data = await departmentService.getDepartments();
        commit('setDepartments', data);
    }
}

const mutations = {
    setDepartments(state, data) {
        state.data = data instanceof Array && data || [];
    },

    addDepartment(state, depart) {
        state.data.push(depart);  
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}