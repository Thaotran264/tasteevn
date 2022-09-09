import axiosAuth3 from "./axios-auth3-form";


export const toppingApi = {
    getAllTopping(params) {
        const url = '/Topping/load-data'
        return axiosAuth3.post(url, params);
    },
}