export const fetchFriends = (currentUserId) => {
    return $.ajax({
        method: 'get',
        url: 'api/friends',
        data: { currentUserId }
    });
};

export const createFriend = (username) => {
    return $.ajax({
        method: 'post',
        url: 'api/friends',
        data: { username }
    });
};

export const createEFriend = (email) => {
    return $.ajax({
        method: 'post',
        url: 'api/friends',
        data: { email }
    });
};
