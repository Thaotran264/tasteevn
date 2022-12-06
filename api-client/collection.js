import axiosClient2 from './axios-client2';

export const collectionApi = {
    userCollection() {
        const url = `/Collection/user_collections`
        return axiosClient2.get(url);
    },
}