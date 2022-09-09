import axiosAuth3 from "./axios-auth3-form";


export const brandApi = {
    getAllBrand(params) {
        const url = '/Brands/load-data'
        return axiosAuth3.post(url, params);
    },
}