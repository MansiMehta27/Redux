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
export const postRequest=(path, data)=>{
    return sendRequest({
        url: path,
        method: "POST",
        data:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
          }
    });
}
export const DeleteRequest=(path,id)=>{
    return sendRequest({
        url:path + id,
        method:"DELETE",

    })
}
export const putRequest=(path,data)=>{
    return sendRequest({
        url:path + data.id,
        method:"PUT",
        data:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
          }
    })
}