import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const addCategory = (category, cb) => {
    axios.post(`${apiPrefix}/category`, category)
        .then(res => handleResponse(res))
        .catch(err => {
            throw err;
        });
}

const getCategory = (cb) => {
    
}

export {
    addCategory,
    getCategory,
}