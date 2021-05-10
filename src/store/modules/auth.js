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
            state.currentUser = data;
        });
    },

    register({state, commit}, data) {
        userService.register(data, (data) => {
            
        });
    }
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}