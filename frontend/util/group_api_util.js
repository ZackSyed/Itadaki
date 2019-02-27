export const fetchGroups = () => {
    return $.ajax({
        method: 'get',
        url: 'api/groups'
    });
};

// export const searchGroups = (partial) => {
//     return $.ajax({
//         method: 'get',
//         url: 'api/groups',
//         data: { partial }
//     });
// };

export const fetchGroup = (id) => {
    return $.ajax({
        method: 'get',
        url: `api/groups/${id}`,
        data: { group }
    });
};

export const createGroup = (group, usernames = []) => {
    return $.ajax({
        method: 'post',
        url: 'api/groups',
        data: { group, usernames }
    });
}; 

export const deleteGroup = (id) => {
    return $.ajax({
        method: 'delete',
        url: `api/groups/${id}`,
    });
};