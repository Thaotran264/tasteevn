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
        return axiosClient.post(url, params)
    },
    resendSmsCode(params) {
        const url = `/Users/resend-sms-code?AuthenId=${params}`;
        return axiosClient.post(url)
    },
    checkPhoneExist(params) {
        const url = `/Users/check-phone-exist?phone=${params}`;
        return axiosClient.post(url)
    }
}