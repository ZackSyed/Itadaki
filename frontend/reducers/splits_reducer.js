import { RECEIVE_ALL_SPLITS } from '../actions/split_actions'; 
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_SPLITS:
            return action.splits;
        default:
            return state; 
    }
}
