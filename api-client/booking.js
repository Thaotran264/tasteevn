import axiosClient2 from './axios-client2';
import axiosAuth from './axios-auth'

export const bookingApi = {
    booking(params) {
        const url = 'api/Booking'
        return axiosAuth.post(url, params);
    },



}