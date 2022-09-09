import axios from 'axios';
const ISSERVER = typeof window === "undefined";

function getToken() {
    if (!ISSERVER) {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        return eval(token || '')
    }
}
const axiosAuth3Form = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'multipart/form-data'
    },
});
axiosAuth3Form.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosAuth3Form;
