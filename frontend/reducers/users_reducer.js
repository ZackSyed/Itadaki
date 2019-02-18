import { RECEIVE_USER, RECEIVE_USERS, LOGOUT_CURRENT_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_FRIENDS, RECEIVE_FRIEND } from '../actions/friend_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_USERS:
        return action.users; 
        case RECEIVE_USER: 
        return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_CURRENT_USER:
        return merge({}, state,  { [action.user.id]: action.user });
        case RECEIVE_FRIENDS:
            const friend_ids = Object.keys(action.friends);
            return merge({}, state, { [action.currentUserId]: { friends: friend_ids }}, action.friends);
        case RECEIVE_FRIEND:
            return merge({}, state, { [action.friend.user_id]: { friends: [action.friend.id] }});
        default:
            return state;
    }
};