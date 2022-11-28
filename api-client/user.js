import axiosAuth from './axios-auth';
import axiosClient from './axios-client';
import axiosFormData2 from './axiosFormData2';

export const userApi = {
    getDetail() {
        return axiosAuth.get(`/Users/Detail`);
    },
    getUserInfor() {
        return axiosAuth.get(`/Users/info`);
    },

    updateUser(params) {
        const url = "/Users/update";
        return axiosAuth.post(url, params)
    },
    uploadAvatar(params) {
        const url = "/Users/upload_avatar";
        return axiosFormData2.post(url, params)
    },
    changePassword() {
        const url = "/Users/change-password";
        return axiosAuth.post(url)
    },
    login(params) {
        const url = `/Users/Login`
        return axiosClient.post(url, params)
    },
    getShippingAddress() {
        return axiosAuth.get(`/Users/shipping_address`);
    },
    setShippingAddress(params) {
        return axiosAuth.post(`/Users/shipping_address/set`,params);
    }
}