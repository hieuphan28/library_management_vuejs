import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const addBook = async (book) => {
    const res = await axios.post(`${apiPrefix}/book`, book);
    return handleResponse(res);
}

const searchBook = async ({query, skip, limit}) => {
    const res = await axios.get(`${apiPrefix}/book`, {
        params: {
            q: query,
            skip,
            limit,
        }
    });
    return handleResponse(res);
}

const updateBook = async (book) => {
    const res = await axios.put(`${apiPrefix}/book`, book);

    return handleResponse(res);
}

const getBookById = async (id) => {
    const res = await axios.get(`${apiPrefix}/book/${id}`);

    return handleResponse(res);
}

const removeBook = async (book) => {
    const res = await axios.delete(`${apiPrefix}/book`, {
        data: book
    });

    return handleResponse(res);
}

const getBookByCate = async (cate_id) => {
    const res = await axios.get(`${apiPrefix}/getbooksbycategory`, {
        params: {
            q: cate_id
        }
    });

    return handleResponse(res);
}

const getBookByDepart = async (depart_id) => {
    const res = await axios.get(`${apiPrefix}/getbooksbydepartment`, {
        params: {
            q: depart_id
        }
    });

    return handleResponse(res);
}

export {
    addBook,
    searchBook,
    updateBook,
    getBookById,
    removeBook,
    getBookByCate,
    getBookByDepart,
}