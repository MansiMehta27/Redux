import { getRequest, postRequest, DeleteRequest, putRequest } from "../request"

export const getCategoryData = () => {
    return getRequest("product")
}
export const addCategoryData = (data) => {
    return postRequest("product", data)
}
export const deleteCategoryData = (id) => {
    return DeleteRequest("product/", id)
}
export const upadateCategoryData = (data) => {
    return putRequest("product/", data)
}