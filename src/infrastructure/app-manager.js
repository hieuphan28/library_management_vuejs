import axios from "axios";

const getHostName = () => {
    return process.env.VUE_APP_HOSTNAME;
}

const getApiPrefix = () => {
    return getHostName() + "/api";
}

const getCdnApi = () => {
    return process.env.VUE_APP_CDN_API;
}

const getCdnKey = () => {
    return process.env.VUE_APP_CDN_KEY;
}

const setAuthorizationToken = (token) => {
    token && (axios.defaults.headers.common['Authorization'] = "Bearer " + token)
        || (clearAuthorization());
}

const clearAuthorization = () => {
    axios.defaults.headers.common['Authorization'] = undefined;
}

export {
    getHostName,
    getApiPrefix,
    setAuthorizationToken,
    clearAuthorization,
    getCdnApi,
    getCdnKey,
}