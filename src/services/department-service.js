import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const addDepartment = async (department) => {
    const res = await axios.post(`${apiPrefix}/department`, department);

    return handleResponse(res);
}

const getDepartments = async () => {
    const res = await axios.get(`${apiPrefix}/departments-list`);

    return handleResponse(res);
}

export {
    addDepartment,
    getDepartments,
}