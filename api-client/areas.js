import axiosClient2 from './axios-client2'

export const areaApi = {
    getAreas() {
        const url = '/Areas'
        return axiosClient2.get(url);
    },
    getAreasId(id) {
        const url = `/Areas/${id}`
        return axiosClient2.get(url);
    },
    getAreasCity(id) {
        const url = `/Areas/by-city/${id}`
        return axiosClient2.get(url);
    }
}