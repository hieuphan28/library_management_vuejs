const getEnumKeyWithValue = (obj, value) => {
    return getEnumKeys(obj)[value + 1];
}

const getEnumKeys = (obj) => {
    return obj && Object.keys(obj) || [];
}

export {
    getEnumKeyWithValue,
    getEnumKeys,
}