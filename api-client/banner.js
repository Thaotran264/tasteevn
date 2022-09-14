import axiosClient from './axios-client';

export const bannerApi = {
    getBanner() {
        return axiosClient.get('api/Home/get_banner');
    },

}