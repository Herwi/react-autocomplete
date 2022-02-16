import actionTypes from './users.actionTypes';
import initState from './users.initState';

const usersReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case actionTypes.USERS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                usernames: [],
                errorMessage: null
            };
        case actionTypes.USERS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                usernames: payload
            };
        case actionTypes.USERS_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            };
        default:
            return state;
    }
};

export default usersReducer;