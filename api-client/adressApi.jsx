import axiosAuth from './axios-auth';
import axiosClient2 from "./axios-client2";


export const adressApi = {
    getAddress() {
        return axiosAuth.get(`/Users/shipping_address`);
    },

    setAddress(params) {
        const url = "/Users/shipping_address/set";
        return axiosAuth.post(url, params)
    },

    getCities() {
        return axiosClient2.get(`/Cities`);
    },

    getAreasByCity(id) {
        return axiosClient2.get(`/Areas/by-city/${id}`);
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