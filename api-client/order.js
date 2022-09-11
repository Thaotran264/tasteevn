import axiosClient2 from './axios-client2';

export const orderApi = { 
    orders(params) {
        const url = '/Orders'
        return axiosClient2.post(url, params);
    }

}