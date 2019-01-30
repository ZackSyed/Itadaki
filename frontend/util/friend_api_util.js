export const fetchFriends = () => {
    return $.ajax({
        method: 'get',
        url: 'api/friends'
    });
};

export const createFriend = (friend) => {
    return $.ajax({
        method: 'post',
        url: 'api/friends',
        data: { friend }
    });
};