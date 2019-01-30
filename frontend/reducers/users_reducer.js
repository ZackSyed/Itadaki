import { RECEIVE_USER, RECEIVE_USERS, LOGOUT_CURRENT_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_FRIENDS, RECEIVE_FRIEND } from '../actions/friend_actions';

export default (state = {}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_USERS:
        return action.users; 
        case RECEIVE_USER: 
        return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_CURRENT_USER:
        return Object.assign({}, state,  { [action.user.id]: action.user });
        case RECEIVE_FRIENDS:
            let friend_ids = [];
            action.friends.forEach( friend => {
                friend_ids.push(friend.id);
            });
            return Object.assign({}, state, { [state.session.id]: { friends: friend_ids }});
        case RECEIVE_FRIEND:
            return action.friend;
        default:
            return state;
    }
};