import *as ActionTypes from "../ActionTypes"

export const Themereducer=(state,action)=>{
    switch(action.type){
        case  ActionTypes:TOOGLE_THEME;
         return{
            ...state,
            theme:action.payload
        }
        default:
            return state;
    }
}