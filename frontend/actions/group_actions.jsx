import * as ApiGroupUtil from '../util/group_api_util'; 

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP'; 
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';

const receiveGroups = (groups) => {
    return {
        type: RECEIVE_GROUPS,
        groups,
    };
};

const receiveGroup = (group) => {
    return {
        type: RECEIVE_GROUP,
        group, 
    };
};

const deleteGroup = () => {
    return {
        type: DELETE_GROUP, 
    };
};

const haveErrors = (errors) => {
    return {
        type: RECEIVE_GROUP_ERRORS,
        errors,
    }
}

export const fetchGroups = () => dispatch => {
    return ApiGroupUtil.fetchGroups().then( groups => 
        dispatch(receiveGroups(groups)),
        error => dispatch(haveErrors(error.responseJSON)));
};

export const fetchGroup = (id) => dispatch => {
    return ApiGroupUtil.fetchGroup(id).then( group => 
        dispatch(receiveGroup(group)),
        error => dispatch(haveErrors(error.responseJSON)));
};

export const createGroup = (group, usernames = []) => dispatch => {
    return ApiGroupUtil.createGroup(group, usernames).then( group => 
        dispatch(receiveGroup(group)),
        error => dispatch(haveErrors(error.responseJSON)));
};

export const removeGroup = (id) => dispatch => {
    return ApiGroupUtil.deleteGroup(id).then( () => 
    dispatch(deleteGroup()),
    error => dispatch(haveErrors(error.responseJSON)));
};
