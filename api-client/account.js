import axiosClient from './axios-client'
import axiosFormData from './axiosFormData';


export const accountAPI = { 
    login(params) {
        const url = "/Users/Login";
        return axiosClient.post(url, params)
    },
    register(params) {
        const url = "/Users/register";
        return axiosFormData.post(url, params)
    },
    verifySmsCode(params) {
        const url = "/Users/verify-sms-code";
        return axiosFormData.post(url, params)
    }
}