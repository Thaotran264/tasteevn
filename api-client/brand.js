import axiosFormData2 from './axiosFormData2';

export const brandApi = { 
    loadData(params) {
        const url = '/Brands/load-data'
        return axiosFormData2.post(url, params);
    },
    detail(id) {
        const url = `/Brands/detail/${id}`
        return axiosFormData2.get(url)
    }
}