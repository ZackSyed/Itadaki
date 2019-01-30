import * as ApiFriendUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';

const receiveFriends = (friends) => {
    return {
        type: RECEIVE_FRIENDS,
        friends,
    };
};

const receiveFriend = (friend) => {
    return {
        type: RECEIVE_FRIEND,
        friend,
    };
};


export const fetchFriends = () => dispatch => {
    return ApiFriendUtil.fetchFriends().then( friends => 
        dispatch(receiveFriends(friends)));
};

export const createFriend = (friend) => dispatch => {
    return ApiFriendUtil.createFriend(friend).then( friend => 
        dispatch(receiveFriend(friend)));
};

