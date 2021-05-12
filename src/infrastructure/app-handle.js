import LibException from "../exceptions/lib-exception";

const handleResponse = (res, cb) => {
    if (res.data && res.data.data)
        return cb(res.data.data);

    if (res.data.meta?.message)
        throw new LibException(res.data.meta.message);
    
    throw new LibException("Something went wrong!!!");
};

export {
    handleResponse
}

