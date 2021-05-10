import LibException from "../exceptions/lib-exception";

const handleResponse = (res, cb) => {
    if (res.data && res.data.data)
        cb(res.data.data);

    if (res.data.meta)
        throw new LibException(res.data.meta);
    
    throw new LibException({
        code: "CERROR01",
        message: "Something went wrong!!!",
    });
};

export {
    handleResponse
}

