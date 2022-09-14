import axiosClient from './axios-client';

export const merchantApi = {
    merChantInfo(id) {
        const url = `/Merchant/${id}`
        return axiosClient.get(url);
    },

}