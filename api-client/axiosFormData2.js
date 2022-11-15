import axios from 'axios';
const ISSERVER = typeof window === "undefined";

function getToken (){
    if(!ISSERVER) {
        let data = JSON.parse(localStorage.getItem('user'))
        return data.token || ''
    }
}
const axiosFormData2 = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${getToken()}`
    },
}); 
axiosFormData2.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosFormData2;
