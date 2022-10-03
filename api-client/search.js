import axiosFormData from './axiosFormData';

export const searchApi = { 
    searchProduct(params) {
        const url = 'api/Home/search_product'
        return axiosFormData.post(url, params);
    },

}