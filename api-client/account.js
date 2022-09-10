import axiosClient from './axios-client'
import axiosFormData from './axiosFormData';
import axiosAuth from './axios-auth';
import axiosAPI2 from './axios-client-2'


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
    },
    forgotPassword(params) {
        const url = `/Users/forgot-password?phoneNumber=${params}`;
        return axiosClient.post(url)
    },
    setPassword(params) {
        const url = `/Users/set-password`;
        return axiosAuth.post(url, params)
    },

}