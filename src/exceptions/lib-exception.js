class LibException extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = LibException;