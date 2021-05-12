import LibException from "../exceptions/lib-exception";

const handleResponse = (res) => {
    if ((res.data && res.data.data) 
        || (res.data.meta?.code && res.data.meta?.code.startsWith('2')))
        return res.data.data;

    if (res.data.meta?.message)
        throw new LibException(res.data.meta.message);
    
    throw new LibException("Something went wrong!!!");
};

const handleError = (err) => {
    throw err;
}

export {
    handleResponse,
    handleError,
}

