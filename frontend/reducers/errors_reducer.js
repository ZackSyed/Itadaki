import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_USER_ERRORS } from '../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors; 
        case RECEIVE_USER_ERRORS:
            return action.errors; 
        default: 
            return state; 
    }
}; 