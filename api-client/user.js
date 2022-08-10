import axiosClient from './axios-client'
import axiosFormData from './axiosFormData';
import axiosAuth from './axios-auth';


export const userApi = { 
    
    getDetail() {
        return axiosAuth.get(`/Users/Detail`);
    },

    updateUser(params) {
        const url = "/Users/Update";
        return axiosAuth.post(url, params)
    },
    changePassword(params) {
        const url = "/Users/change-password";
        return axiosAuth.post(url, params)
    },
}