import axios from 'axios'
import { handleResponse, handleError } from "../infrastructure/app-handle";
import * as appManager from '../infrastructure/app-manager'

const apiPrefix = appManager.getApiPrefix();

const getReservations = async ({user_id, reservation_status}) => {
    const res = await axios.get(`${apiPrefix}/reservation`, {
        params: {
            userId: user_id,
            status: reservation_status,
        }
    });

    return handleResponse(res);
}

// Member

const addReservationItem = async ({user_id, book_id}) => {
    const res = await axios.post(`${apiPrefix}/reservation/item`, {
        user_id,
        book_id,
    });

    return handleResponse(res);
};

const removeReservationItem = async ({user_id, book_id, amount}) => {
    const res = await axios.delete(`${apiPrefix}/reservation/item`, {
        data:{
            user_id,
            book_id,
            amount,
        }
    });

    return handleResponse(res)
}

const borrow = async (reservation) => {
    const res = await axios.post(`${apiPrefix}/reservation/borrow`, reservation);

    return handleResponse(res);
}

// Admin

const cancelBorrowing = async (reservation_id) => {
    const res = await axios.post(`${apiPrefix}/reservation/cancel`, {
        reservation_id
    });

    return handleResponse(res);
}

const getIssue = async () => {
    const res = await axios.get(`${apiPrefix}/reservation/issue`);

    return handleResponse(res);
}

const issueReservation = async (reservation_id) => {
    const res = await axios.post(`${apiPrefix}/reservation/issue`, {
        reservation_id
    });

    return handleResponse(res);
}

const getReturn = async () => {
    const res = await axios.get(`${apiPrefix}/reservation/return`);

    return handleResponse(res);
}

const returnReservation = async (reservation) => {
    const res = await axios.post(`${apiPrefix}/reservation/return`, reservation);
    
    return handleResponse(res);
}


export {
    getReservations,
    addReservationItem,
    removeReservationItem,
    borrow,
    cancelBorrowing,
    getIssue,
    issueReservation,
    getReturn,
    returnReservation,
}