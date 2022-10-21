import axiosClient2 from './axios-client2';
export const bookingApi = {
    booking(params) {
        const url = 'api/Booking'
        return axiosClient2.post(url, params);
    },



}