import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const addBook = (book, cb) => {
    axios.post(`${apiPrefix}/book`, book)
        .then(res => handleResponse(res, cb))
        .catch(err => {
            throw err;
        });
}

const searchBook = ({query, skip, limit}, cb) => {
    axios.get(`${apiPrefix}/book`, {
        params: {
            q: query,
            skip,
            limit,
        }
    }).then(res => handleResponse(res, cb))
    .catch(err => {
        throw err;
    });
}

const updateBook = (book, cb) => {
    axios.put(`${apiPrefix}/book`, book)
        .then(res => handleResponse(res, cb))
        .catch(err => {
            throw err;
        });
}

export {
    addBook,
    searchBook,
    updateBook,
}