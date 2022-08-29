import axiosClient from './axios-client'
import axiosFormData from './axiosFormData';
import axiosAuth from './axios-auth';
import axiosAPI2 from './axios-client-2';


export const userApi = { 
    
    getDetail() {
        return axiosAuth.get(`/Users/Detail`);
    },
    getUserInfor() {
        return axiosAuth.get(`/Users/info`);
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