import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse, handleError } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const login = async ({username, password}) => {
    const res = await axios.post(`${apiPrefix}/login`, {
        username,
        password,
    });

    return handleResponse(res);
}

const register = async (data) => {
    const res = await axios.post(`${apiPrefix}/registration`, data);

    return handleResponse(res);
}

const getProfile = async () => {
    const res = await axios.get(`${apiPrefix}/profile`);

    return handleResponse(res);
}

const updateProfile = async (user) => {
    const res = await axios.put(`${apiPrefix}/user`, user);

    return handleResponse(res);
}

export {
    login,
    register,
    getProfile,
    updateProfile,
}