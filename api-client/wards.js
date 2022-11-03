import axiosClient from './axios-client'

export const wardsApi = {
    getWards() {
        const url = 'api/Wards'
        return axiosClient.get(url);
    },
    getWardsID(id) {
        const url = `api/Wards/${id}`
        return axiosClient.get(url);
    },
    getWardsByDistId(id) {
        const url = `api/Wards/by-district/${id}`
        return axiosClient.get(url);
    },

}