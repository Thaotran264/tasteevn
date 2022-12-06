import axiosClient from './axios-client';
import axiosClient2 from './axios-client2';

export const merchantApi = {
    merChantInfo(id) {
        const url = `/Merchant/${id}`
        return axiosClient.get(url);
    },
    like(params) {
        const url = `/Merchant/like`
        return axiosClient2.post(url,params);
    },
    unlike(params) {
        const url = `/Merchant/unlike`
        return axiosClient2.post(url,params);
    },

}