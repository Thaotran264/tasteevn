import axiosClient2 from './axios-client2';
import axiosAuth from './axios-auth'
import axiosFormData2 from './axiosFormData2'
export const bookingApi = {
    booking(params) {
        const url = 'Booking'
        return axiosAuth.post(url, params);
    },
    loadData(params) {
        const url = 'Booking/load-data'
        return axiosFormData2.post(url, params);
    },



}