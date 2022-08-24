import { getRequest, postRequest,DeleteRequest, putRequest } from "../request"

export const getDoctorsData=()=>{
    return getRequest("doctors")
}
export const addDoctorsData=(data)=>{
    return postRequest("doctors", data)
}
export const deleteDoctorsData=(id)=>{
    return DeleteRequest("doctors/", id)
}
export const upadateDoctorsData=(data)=>{
    return putRequest("doctors/", data)
}