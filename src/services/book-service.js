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
    const data = book;
    const res = await axios.delete(`${apiPrefix}/book`, {
        data: book
    });

    return handleResponse(res);
}

export {
    addBook,
    searchBook,
    updateBook,
    getBookById,
    removeBook,
}