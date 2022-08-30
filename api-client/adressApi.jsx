import axiosAPI2 from "./axios-client-2";
import axiosAuth from './axios-auth';


export const adressApi = { 
    getAddress() {
        return axiosAuth.get(`/Users/shipping_address`);
    },

    setAddress(params) {
        const url = "/Users/shipping_address/set";
        return axiosAuth.post(url, params)
    },
    
    getCities() {
        return axiosAPI2.get(`/api/Cities`);
    },

    getAreasByCity(id) {
        return axiosAPI2.get(`/api/Areas/by-city/${id}`);
    },

    setDefault(id) {
        const url = `/Users/shipping_address/set_default?Id=${id}`;
        return axiosAuth.post(url)
    },

    deleteAddress(id) {
        const url = `/Users/shipping_address/delete?Id=${id}`;
        return axiosAuth.post(url)
    },

    

    
}