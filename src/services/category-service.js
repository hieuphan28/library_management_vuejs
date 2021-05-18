import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse, handleError } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const addCategory = async (category) => {
    const res = await axios.post(`${apiPrefix}/category`, category);

    return handleResponse(res);
}

const getCategories = async () => {
    const res = await axios.get(`${apiPrefix}/categories-list`);

    return handleResponse(res);
}

export {
    addCategory,
    getCategories,
}