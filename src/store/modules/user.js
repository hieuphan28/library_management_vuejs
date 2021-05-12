import { setAuthorization } from "../../infrastructure/app-manager";
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

    register({state, commit}, user) {
        userService.register(user, (data) => {
            localStorage['currentUser'] = JSON.stringify(data);
            commit('setCurrentUser', data);
        });
    },

    getProfile({state, commit}) {
        userService.getProfile((data) => {
            const refrProfile = Object.assign(state.currentUser, data);
            commit('setCurrentUser', refrProfile);
        });
    },

    checkAuth({state, commit}, data) {
        const savedUser = JSON.parse(localStorage['currentUser'] || undefined);
        commit('setCurrentUser', savedUser);
    }
}

const mutations = {
    setCurrentUser(state, user) {
        state.currentUser = user;
        setAuthorization(user.token);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}