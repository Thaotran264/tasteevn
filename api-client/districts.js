import axiosClient from './axios-client'

export const distApi = {
    getDist() {
        const url = 'api/Districts'
        return axiosClient.get(url);
    },
    getDistID(id) {
        const url = `api/Districts/${id}`
        return axiosClient.get(url);
    },
    getDistByCityId(id) {
        const url = `api/Districts/by-city/${id}`
        return axiosClient.get(url);
    },

}