import { RECEIVE_TAB, RECEIVE_ALL_TABS } from '../actions/tab_action';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_TAB:
        return merge({}, state, { [action.tab.id]: action.tab });
        case RECEIVE_ALL_TABS:
            return merge({}, state, )
        default:
            return state;
    }
}