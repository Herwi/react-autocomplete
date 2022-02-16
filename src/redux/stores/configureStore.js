import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users/users.reducer';

const store = createStore(usersReducer, applyMiddleware(thunk));
export default store;