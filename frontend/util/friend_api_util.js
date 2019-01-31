export const fetchFriends = () => {
    return $.ajax({
        method: 'get',
        url: 'api/friends'
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

// export const searchFriend = (username) => {
//     return $.ajax({
//         method: 'get',
//         url: 'api/users/search',
//         data: { username }
//     });
// };