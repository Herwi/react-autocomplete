import UserService from '../../../services/users.service';
import actions from './users.actions';

export const loadUsersAsync = () => (dispatch) => {
    dispatch(actions.usersLoadStart());

    UserService.getAllUsers()
        .then((response) => dispatch(
            actions.usersLoadSuccess(response.data.map( a => {
                return a.username;
            }))
        ))
        .catch((error) => dispatch(actions.usersLoadError(error.message)));
}