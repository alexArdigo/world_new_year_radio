export const buildQueryParams = (params) => {
    return Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
};

export const randomPicture = (list) => {

    return list[Math.floor(Math.random() * list.length)];
}