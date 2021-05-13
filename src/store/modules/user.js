import { setAuthorization } from "../../infrastructure/app-manager";
import * as userService from "../../services/user-service";

const state = () => ({
    currentUser: {}
});

const getters = {
    currentUser: (state, getters) => {
        return state.currentUser || {};
    }
}

const actions = {
    async login({state, commit}, {username, password}) {
        const data = await userService.login({username, password});
        commit('setCurrentUser', data);
    },

    async register({state, commit}, user) {
        const data = await userService.register(user);
        
        commit('setCurrentUser', data);
    },

    async getProfile({state, commit}) {
        const data = await userService.getProfile(data);

        const refrProfile = Object.assign(state.currentUser, data);
        commit('setCurrentUser', refrProfile);
    },

    async updateProfile({state, commit}, user) {
        const data = await userService.updateProfile(user) || user;

        const refrProfile = Object.assign(state.currentUser, user);
        commit('setCurrentUser', refrProfile);
    },

    checkAuth({state, commit}, data) {
        const savedLocalUser = localStorage['currentUser'];
        const savedUser = savedLocalUser && savedLocalUser.length > 0 
            && JSON.parse(savedLocalUser) || undefined;
        commit('setCurrentUser', savedUser);
    }
}

const mutations = {
    setCurrentUser(state, user) {
        state.currentUser = user;
        localStorage['currentUser'] = JSON.stringify(user);
        setAuthorization(user?.token);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}