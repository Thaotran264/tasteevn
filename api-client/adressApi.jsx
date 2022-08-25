import axiosAPI2 from "./axios-client-2";


export const adressApi = { 
    
    getCities() {
        return axiosAPI2.get(`/Cities`);
    },

    getAreasByCity(id) {
        return axiosAPI2.get(`/Areas/by-city/${id}`);
    },
}