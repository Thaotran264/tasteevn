import axiosClient from './axios-client'

export const cityApi = {
    getCity() {
        const url = 'api/Cities'
        return axiosClient.get(url);
    },
    getDist() {
        const url = 'api/Districts'
        return axiosClient.get(url);
    },
    getWard() {
        const url = 'api/Wards'
        return axiosClient.get(url);
    },
}