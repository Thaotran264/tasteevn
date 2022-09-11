import axiosFormData2 from './axiosFormData2';

export const toppingApi = { 
    loadData(params) {
        const url = '/Topping/load-data'
        return axiosFormData2.post(url, params);
    },
    detail(id) {
        const url = `/Topping/detail/${id}`
        return axiosFormData2.get(url)
    },
    groupLoadData(params) {
        const url = '/Topping/group/load-data'
        return axiosFormData2.post(url, params);
    },
    groupDetail(id) {
        const url = `/Topping/group/detail/${id}`
        return axiosFormData2.get(url)
    },
}