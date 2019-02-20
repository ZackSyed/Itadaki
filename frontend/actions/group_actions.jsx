import * as ApiGroupUtil from '../util/group_api_util'; 

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP'; 

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

export const fetchGroups = () => dispatch => {
    return ApiGroupUtil.fetchGroups().then( groups => 
        dispatch(receiveGroups(groups)));
};

export const fetchGroup = (id) => dispatch => {
    return ApiGroupUtil.fetchGroup(id).then( group => 
        dispatch(receiveGroup(group)));
};

export const createGroup = (group) => dispatch => {
    return ApiGroupUtil.createGroup(group).then( group => 
        dispatch(receiveGroup(group)));
};

export const removeGroup = (id) => dispatch => {
    return ApiGroupUtil.deleteGroup(id).then( () => 
    dispatch(deleteGroup()));
};
