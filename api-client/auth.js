import axiosClient from './axios-client'

export const authApi = { 
    login(payload) {
        return axiosClient.post('/Users/Login', payload)
    }
}