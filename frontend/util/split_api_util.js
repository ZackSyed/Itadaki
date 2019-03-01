export const fetchSplits = () => {
    return $.ajax({
        method: 'get',
        url: 'api/splits'
    });
};