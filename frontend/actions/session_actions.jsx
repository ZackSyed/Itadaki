import * as ApiSessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; 

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

const haveErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors, 
    };
};

export const createNewUser = (user) => dispatch => {
    return ApiSessionUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(haveErrors(error.responseJSON))); 
};

export const loginUser = formUser => dispatch => ApiSessionUtil.login(formUser)
    .then( user => dispatch(receiveCurrentUser(user)),
    error => dispatch(haveErrors(error.responseJSON)));

export const logout = () => dispatch => ApiSessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
    error => dispatch(haveErrors(error.responseJSON)));
