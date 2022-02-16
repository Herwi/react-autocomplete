import actionTypes from './users.actionTypes';

const usersLoadStart = () => {
    return {
        type: actionTypes.USERS_LOAD_START
    };
};

const usersLoadSuccess = users => {
    return {
        type: actionTypes.USERS_LOAD_SUCCESS,
        payload: users
    };
};

const usersLoadError = errorMessage => {
    return {
        type: actionTypes.USERS_LOAD_ERROR,
        payload: errorMessage
    };
};

export default {
    usersLoadStart,
    usersLoadSuccess,
    usersLoadError
}