const getHostName = () => {
    return process.env.VUE_APP_HOSTNAME;
}

const getApiPrefix = () => {
    return getHostName() + "/api";
}

export {
    getHostName,
    getApiPrefix,
}