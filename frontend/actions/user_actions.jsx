import * as ApiUserUtil from '../util/users_api_utl';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER'; 

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER, 
        user, 
    };
};


export const fetchUsers = () => dispatch => {
    return ApiUserUtil.fetchUsers().then( users => 
        dispatch(receiveUsers(users))); 
}; 

export const fetchUser = (id) => dispatch => {
    return ApiUserUtil.fetchUser(id).then( user =>
        dispatch(receiveUser(user)));
};
