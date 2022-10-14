import axios from 'axios';
const ISSERVER = typeof window === "undefined";
let token
// if (typeof window !== "undefined") {
//     token = sessionStorage.getItem("token") || ''
//   }
function getToken (){
    if(!ISSERVER) {
        let token = JSON.parse(sessionStorage.getItem('token')) || ''
        return token
    }
}
const axiosClient2 = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    },
}); 
axiosClient2.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosClient2;
