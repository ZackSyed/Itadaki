import * as ApiFriendUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

const receiveFriends = (friends) => {
    return {
        type: RECEIVE_FRIENDS,
        friends,
    };
};


export const fetchFriends = () => {
    return ApiFriendUtil.fetchFriends().then( friends => 
        dispatch(receiveFriends(friends)));
};

