import { getrequest } from "../request"

export const getmedicinesData=()=>{
    return getrequest("medisin")
}