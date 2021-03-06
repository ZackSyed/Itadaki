import { RECEIVE_GROUPS, RECEIVE_GROUP, DELETE_GROUP } from '../actions/group_actions';
import { merge } from 'lodash'

export default (state = {}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_GROUPS:
        return merge({}, state, action.groups )
        case RECEIVE_GROUP: 
        return Object.assign({}, state, { [action.group.id]: action.group });
        case DELETE_GROUP:
        let newState = merge({}, state);
        delete newState[action.group.id]
        return newState; 
        default:
            return state;
    }
};