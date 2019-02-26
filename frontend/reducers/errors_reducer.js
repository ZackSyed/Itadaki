import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_ERRORS } from '../actions/user_actions';
import { FRIEND_ERRORS } from '../actions/friend_actions'; 
import { RECIEVE_TAB_ERROR } from '../actions/tab_action';

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
            if (action.errors === undefined) {
                return oldState; 
            } else {
                return action.errors; 
            } 
        case FRIEND_ERRORS:
            if (action.errors === undefined) {
                return oldState; 
            } else {
                return action.errors; 
            } 
        case RECEIVE_CURRENT_USER:
            return []; 
        case RECIEVE_TAB_ERROR:
            if (action.errors === undefined) {
                return oldState; 
            } else {
                return action.errors; 
            } 
        default: 
            return oldState; 
    }
}; 