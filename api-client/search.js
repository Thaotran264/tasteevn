import axiosClient from './axios-client';
import axiosFormData from './axiosFormData';

export const searchApi = { 
    searchProduct(params) {
        const url = 'api/Home/search_product'
        return axiosFormData.post(url, params);
    },
    getProductSlider() {
        const url = 'api/Home/get_product_slider'
        return axiosClient.get(url);
    },

}