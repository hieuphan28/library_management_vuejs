import { ReservationStatus } from "../../common/bundleOfEnum";
import * as reservationService from "../../services/reservation-service";
import { bookitems2BookData, preProcessReservation } from "../../utilities/data-util";

const state = () => ({
    data: [],
});

const sortByDate = (a,b) => new Date(b.create_date) - new Date(a.create_date);

const getters = {
    reservations: (state, getters, rootGetters) => {
        return (state.data || []).map(item => preProcessReservation(item));
    },

    reservationByStatus: (state, getters) => status => {
        return getters.reservations
        .filter(item => `${item.status}` === `${status}`)
        .sort(sortByDate);
    },

    reservationByUserIdAndStatus: (state, getters) => ({user_id, status}) => {
        return getters.reservationByStatus(status)
            .filter(item => `${item.user_id}` === `${user_id}`)
            .sort(sortByDate);
    },

    reservationByUserId: (state, getters) => (user_id) => {
        return getters.reservations
            .filter(item => `${item.user_id}` === `${user_id}`)
            .filter(item => `${item.status}` !== `${ReservationStatus.TEMP}`)
            .sort(sortByDate);
    },

    currentCart: (state, getters, rootGetters) => {
        const user_id = rootGetters['user'].currentUser?.user_id;

        const data =  getters.reservationByUserIdAndStatus({
            user_id,
            status: ReservationStatus.TEMP,
        })[0] || {};

        return data;
    },

    currentReservations: (state, getters, rootGetters) => {
        const user_id = rootGetters['user'].currentUser?.user_id;

        return getters.reservationByUserId(user_id);
    },

    reservationById: (state, getters) => reservation_id => {
        const reservations = getters.currentReservations;

        return reservations.find(item => `${item.reservation_id}` === `${reservation_id}`);
    },

    // Admin

    issueReservations: (state, getters) => {
        return getters.reservationByStatus(ReservationStatus.RESERVED);
    },

    returnReservations: (state, getters) => {
        return getters.reservationByStatus(ReservationStatus.BORROWING);
    },
}

const actions = {
    async getResevations({state, commit}, data) {
        const aaa = data;
        const result = await reservationService.getReservations(data) || [];
        
        result.forEach(item => {
            commit('upsertReservation', item);
        });
    },

    async initCurrentReservations({state, commit, dispatch, rootGetters}) {
        const user_id = rootGetters['user/currentUser']?.user_id;

        dispatch('getResevations', {
            user_id
        });
    },

    // Member

    async addCurrentCartItem({state, commit, rootGetters}, {book_id}) {
        const user_id = rootGetters['user/currentUser']?.user_id;

        const result = await reservationService.addReservationItem({user_id, book_id});
        commit('upsertReservation', result);
    },

    async removeCurrentCartItem({state, commit, rootGetters}, {book_id, amount}) {
        const user_id = rootGetters['user/currentUser']?.user_id;
        
        amount = amount && amount > 0 ? amount : undefined;

        const result = await reservationService.removeReservationItem({user_id, book_id, amount});
        commit('upsertReservation', result);
    },

    async borrow({state, commit, rootGetters}, reservation) {
        const result = await reservationService.borrow(reservation);

        commit('upsertReservation', result);
    },

    // admin

    async getIssue({state, commit}) {
        const result = await reservationService.getIssue();

        result.forEach(item => {
            commit('upsertReservation', item);
        });
    },

    async issueReservation({state, commit}, reservation_id) {
        const result = await reservationService.issueReservation(reservation_id)

        commit('upsertReservation', result);
    },

    async getReturn({state, commit}) {
        const result = await reservationService.getReturn();

        result.forEach(item => {
            commit('upsertReservation', item);
        }); 
    },

    async returnReservation({state, commit}, reservation) {
        const result = await reservationService.returnReservation(reservation)

        commit('upsertReservation', result);
    }
}

const mutations = {
    upsertReservation(state, reservation) {
        const existIndex = state.data.findIndex(x => x.reservation_id === reservation.reservation_id);
        (existIndex !== -1) && (state.data[existIndex] = reservation)
            || state.data.push(reservation);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}