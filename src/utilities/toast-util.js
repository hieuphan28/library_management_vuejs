import { createToast } from "mosha-vue-toastify"

const toastMessage = (message, type) => {
    return createToast(message, {
        showIcon: true,
        position: 'top-right',
        type: type || 'default'
    });
};

const toastError = (err) => {
    if (err instanceof Error) 
        return toastMessage(err.message, 'danger');

    return toastMessage(err, 'danger');
};
const toastSuccess = (message) => toastMessage(message, 'success');
const toastInfo = (message) => toastMessage(message, 'info');
const toastWarning = (message) => toastMessage(message, 'warning');

export {
    toastMessage,
    toastError,
    toastSuccess,
    toastInfo,
    toastWarning,
}