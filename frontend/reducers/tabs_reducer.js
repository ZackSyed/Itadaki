import { RECEIVE_TAB } from '../actions/tab_action';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_TAB:
            return action.tab;
        default:
            return state;
    }
}