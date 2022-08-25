import axios from 'axios';
console.log('%caxios-client-2.js line:2 axiosAPI2', 'color: #007acc;', process.env.API_TEST);
const axiosAPI2 = axios.create({
    baseURL: process.env.API_TEST,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add a response interceptor
axiosAPI2.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
export default axiosAPI2;