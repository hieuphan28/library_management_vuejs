const UserRole = {
    UNDEFINED: -1,
    MEMBER: 0,
    ADMIN: 1,
}

const BookStatus = {
    UNDEFINED: -1,
    NOT_AVAILABLE: 0,
    AVAILABLE: 1,
    LOST: 2,
}

const ReservationStatus = {
    UNDEFINED: -1,
    TEMP: 0,
    BORROWING: 1,
    RESERVED: 2,
    CLOSED: 3,
    CANCELED: 4,
}

export {
    UserRole,
    BookStatus,
    ReservationStatus,
}