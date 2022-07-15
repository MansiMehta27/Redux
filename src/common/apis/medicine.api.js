import { getRequest } from "../request"

export const getMedicinesData=()=>{
    return getRequest("medisin")
}