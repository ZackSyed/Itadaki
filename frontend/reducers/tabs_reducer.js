import { RECEIVE_TAB, RECEIVE_ALL_TABS } from '../actions/tab_action';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_TAB:
        return merge({}, state, { [action.tab.id]: action.tab });
        case RECEIVE_ALL_TABS:
            const tab_ids = Object.keys(action.tabs);
            return merge({}, state, { [action.entities.session.id]: { tabs: tab_ids }}, action.tabs)
        default:
            return state;
    }
}