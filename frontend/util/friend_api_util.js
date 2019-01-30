const fetchFriends = () => {
    return $.ajax({
        method: 'get',
        url: 'api/friends'
    });
};

