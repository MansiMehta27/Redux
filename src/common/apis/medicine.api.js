import { getRequest, postRequest,DeleteRequest, updateRequest, putRequest } from "../request"

export const getMedicinesData=()=>{
    return getRequest("medisin")
}
export const addMedicinesData=(data)=>{
    return postRequest("medisin", data)
}
export const deleteMedicinesData=(id)=>{
    return DeleteRequest("medisin/", id)
}
export const upadateMedicinsData=(data)=>{
    return putRequest("medisin/", data)
}