import { getRequest, postRequest,DeleteRequest, putRequest } from "../request"

export const getCategoryData=()=>{
    return getRequest("category")
}
export const addCategoryData=(data)=>{
    return postRequest("category", data)
}
export const deleteCategoryData=(id)=>{
    return DeleteRequest("category/", id)
}
export const upadateCategoryData=(data)=>{
    return putRequest("category/", data)
}