import axiosFormData2 from './axiosFormData2';

export const menuApi = { 
    loadData(params) {
        const url = '/Menus/load-data'
        return axiosFormData2.post(url, params);
    },
    getDetail(id) {
        const url = `/Menus/detail/${id}`
        return axiosFormData2.get(url)
    },
    itemLoadData(params) {
        const url = '/Menus/Items/load-data'
        return axiosFormData2.post(url, params);
    },
    getItemDetail(id) {
        const url = `/Menus/Items/detail/${id}`
        return axiosFormData2.get(url)
    },
}