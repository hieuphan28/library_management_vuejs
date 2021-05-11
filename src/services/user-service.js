import axios from "axios";
import * as appManager from '../infrastructure/app-manager';
import { handleResponse } from '../infrastructure/app-handle'; 

const apiPrefix = appManager.getApiPrefix();

const login = ({username, password}, cb) => {
    axios.post(`${apiPrefix}/login`, {
            username,
            password,
        }).then(res => {
            handleResponse(res, cb);
        }).catch(err => {
            throw err;
        });
}

const register = (data, cb) => {
    axios.post(`${apiPrefix}/registration`, data)
        .then(res => {
            handleResponse(res, cb);
        }).catch(err => {
            throw err;
        });
}

const getProfile = (cb) => {
    axios.get(`${apiPrefix}/profile`)
        .then(res => handleResponse(res, cb))
        .catch(err => {
            throw err;
        });
}

export {
    login,
    register,
    getProfile,
}