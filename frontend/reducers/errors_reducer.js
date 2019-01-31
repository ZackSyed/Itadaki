import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_ERRORS } from '../actions/user_actions';
import { FRIEND_ERRORS } from '../actions/friend_actions'; 

export default (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            if (action.errors === undefined) {
                return oldState; 
            } else {
                return action.errors; 
            } 
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case FRIEND_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return []; 
        default: 
            return oldState; 
    }
}; 