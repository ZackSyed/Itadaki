import * as ApiFriendUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const FRIEND_ERRORS = 'FRIEND_ERRORS';

const receiveFriends = (friends, currentUserId) => {
    return {
        type: RECEIVE_FRIENDS,
        friends,
        currentUserId,
    };
};

const receiveFriend = (friend) => {
    return {
        type: RECEIVE_FRIEND,
        friend,
    };
};

const receiveErrors = (errors) => {
    return {
        type: FRIEND_ERRORS,
        errors,
    };
};


export const fetchFriends = (currentUserId) => dispatch => {
    return ApiFriendUtil.fetchFriends(currentUserId).then( friends => 
        dispatch(receiveFriends(friends, currentUserId)),
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const createFriend = (param) => dispatch => { 
    return ApiFriendUtil.createFriend(param).then( friend => 
        dispatch(receiveFriend(friend)),
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const createEFriend = (param) => dispatch => { 
    return ApiFriendUtil.createEFriend(param).then( friend => 
        dispatch(receiveFriend(friend)),
        error => dispatch(receiveErrors(error.responseJSON)));
};


