import axios from "axios";

const $http = axios.create({
    timeout: 12000,
    withCredentials: true,
});

$http.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(new Error(error));
});

$http.interceptors.response.use((response: any) => {
    return response
}, error => {
    return Promise.reject(new Error(error));
})

export default $http;