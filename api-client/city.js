import axiosClient from './axios-client'

export const cityApi = {
    getCity() {
        const url = 'api/Cities'
        return axiosClient.get(url);
    }
}