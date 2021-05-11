import axios from "axios";

const getHostName = () => {
    return process.env.VUE_APP_HOSTNAME;
}

const getApiPrefix = () => {
    return getHostName() + "/api";
}

const setAuthorization = (token) => {
    token && (axios.defaults.headers.common['Authorization'] = "Bearer " + token)
        || (clearAuthorization());
}

const clearAuthorization = () => {
    axios.defaults.headers.common['Authorization'] = undefined;
}

export {
    getHostName,
    getApiPrefix,
    setAuthorization,
    clearAuthorization,
}