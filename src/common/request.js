import axios from 'axios';
import { base_url } from "../Sharad/baseurl";

const axiosInstance = axios.create({
    baseURL: base_url,
    timeout: 2000,

});
export const sendRequest = (config) => {
    return axiosInstance.request(config)
}
export const getRequest = (path) => {
    return sendRequest({
        url: path,
        method: "GET"
    });
};
export const postRequest=(path)=>{
    return sendRequest({
        url: path,
        method: "POST"
    });
}
