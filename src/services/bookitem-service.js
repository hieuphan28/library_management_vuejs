import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const getBookItemByBookId = async (book_id) => {
    const res = await axios.get(`${apiPrefix}/bookitem`, {
        params: {
            bookId: book_id,
        }
    });

    return handleResponse(res);
}

const countBookItemByBookId = async ({book_id}) => {
    const res = await axios.get(`${apiPrefix}/bookitem/count`, {
        params: {
            bookId: book_id,
        }
    });

    return handleResponse(res);
}

const addBookItem = async (bookitem) => {
    const res = await axios.post(`${apiPrefix}/bookitem`, bookitem);

    return handleResponse(res);
}

const updateBookItem = async (bookitem) => {
    const res = await axios.put(`${apiPrefix}/bookitem`, bookitem);

    return handleResponse(res);
}


export {
    getBookItemByBookId,
    countBookItemByBookId,
    addBookItem,
    updateBookItem,
}