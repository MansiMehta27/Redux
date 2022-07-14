import axios from 'axios';
import { base_url } from "../Sharad/baseurl";

const instance = axios.create({
    baseURL: base_url ,
    timeout: 2000,
   
});
  const sendrequest = (config)=>{
      return axiosInstance.request(config)
}
export const getrequest =(path)=>{
    return sendrequest.request({
                url:path,
                method:"GET"
    });
}
