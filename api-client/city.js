import axiosClient2 from './axios-client2'

export const cityApi = {
    getCity() {
        const url = '/Cities'
        return axiosClient2.get(url);
    }
}