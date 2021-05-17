import { setAuthorizationToken } from "../../infrastructure/app-manager";
import * as userService from "../../services/user-service";
import { UserRole } from "../../common/bundleOfEnum";

const state = () => ({
    currentUser: {}
});

const getters = {
    currentUser: (state, getters) => {
        return state.currentUser || {};
    },

    isLogged: (state, getters) => {
        return state.currentUser && state.currentUser.token;
    },

    isMember: (state, getters) => {
    return getters.isLogged && state.currentUser.role === UserRole.MEMBER;
    },

    isAdmin: (state, getters) => {
    return getters.isLogged && state.currentUser.role === UserRole.ADMIN;
    },
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
    async registerAdmin({state, commit}, user) {
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
            && savedLocalUser !== "undefined"
            && JSON.parse(savedLocalUser) || undefined;
        commit('setCurrentUser', savedUser);
    }
}

const mutations = {
    setCurrentUser(state, user) {
        state.currentUser = user;
        if (user && user.token)
            localStorage['currentUser'] = JSON.stringify(user) ;
        setAuthorizationToken(user?.token);
    },

    clearCurrentUser(state) {
        state.currentUser = undefined,
        localStorage.removeItem('currentUser');
        setAuthorizationToken(undefined);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}