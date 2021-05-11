import * as userService from "../../services/user-service";

const state = () => ({
    currentUser: {}
});

const getters = {
    currentUser: (state, getters) => {
        return state.currentUser;
    }
}

const actions = {
    login({state, commit}, {username, password}) {
        userService.login({username, password}, (data) => {
            commit('setCurrentUser', data);
        });
    },

    register({state, commit}, data) {
        userService.register(data, (data) => {
            commit('setCurrentUser', data);
        });
    }
}

const mutations = {
    setCurrentUser(state, user) {
        state.currentUser = user;

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}