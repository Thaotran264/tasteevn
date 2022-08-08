import axiosClient from './axios-client'
import axiosFormData from './axiosFormData';
import axiosAuth from './axios-auth';


export const userApi = { 
    
    getDetail() {
        return axiosAuth.get(`/Users/Detail`);
    }
}