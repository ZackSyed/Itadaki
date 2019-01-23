import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 

export default (state = {}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_USERS:
        return action.users; 
        case RECEIVE_USER: 
        return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
};