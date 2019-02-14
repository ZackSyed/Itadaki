export const fetchTab = (id) => {
    return $.ajax({
        method: 'get',
        url: `api/tabs/${id}`, 
        data: { tab }
    });
}

export const createTab = (tab) => {
    return $.ajax({
        method: 'post',
        url: `api/tabs`,
        data: { tab }
    });
}
