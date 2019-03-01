import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer';
import groupReducer from './group_reducer';
import tabReducer from './tabs_reducer';
import splitReducer from './splits_reducer';

export default combineReducers({
    users: usersReducer, 
    groups: groupReducer,
    tabs: tabReducer,
    splits: splitReducer,
}); 