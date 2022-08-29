import axios from 'axios';
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
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
export default axiosAPI2;