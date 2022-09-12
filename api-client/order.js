import axiosClient2 from './axios-client2';
import axiosFormData2 from './axiosFormData2';
export const orderApi = {
    orders(params) {
        const url = '/Orders'
        return axiosClient2.post(url, params);
    },
    loadData(params) {
        const url = `/Orders/load-data`
        return axiosFormData2.post(url, params)
    }

}