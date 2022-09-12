import axiosAuth from './axios-auth';
import axiosClient from './axios-client';

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
    login(params) {
        const url = `/Users/Login`
        return axiosClient.post(url, params)
    }
}