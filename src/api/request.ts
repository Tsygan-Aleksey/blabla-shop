interface Config{
    params?: {[key: string]: any};
    prefix?: string
}
export const request = (url: string, {params = {}, prefix = '/api'} : Config = {}) => {
    const urlParams = new URLSearchParams(params).toString();

    return fetch(`${prefix}/${url}?${urlParams}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("ERROR");
    });
};