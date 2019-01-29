import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer';
import groupsReducer from './group_reducer';

export default combineReducers({
    users: usersReducer, 
    groups: groupReducer, 
}); 