import axiosClient2 from './axios-client2';
export const orderApi = {
    orders(params) {
        const url = 'api/Orders'
        return axiosClient2.post(url, params);
    },
    loadData(params) {
        const url = `api/Orders/load-data`
        return axiosClient2.post(url, params)
    },


}