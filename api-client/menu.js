import axiosAuth3Form from "./axios-auth3-form";

export const menuApi = {
    getAllMenu(params) {
        const url = '/Menus/load-data'
        return axiosAuth3Form.post(url, params);
    },
}