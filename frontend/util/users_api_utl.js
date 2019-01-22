export const fetchUsers = () => {
    return $.ajax({
        method: 'get',
        url: 'api/users'
    });
};

export const fetchUser = (id) => {
    return $.ajax({
        method: 'get',
        url: `api/users/${id}`,
        data: { user }
    });
};

export const createUser = (user) => {
    return $.ajax({
        method: 'post',
        url: 'api/posts',
        data: { user }
    });
}; 