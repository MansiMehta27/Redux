import * as ActionTypes  from "../ActionTypes"
const initialstate={
    isloading:false,
    medicines:[],
    error:''
}
export const medicineReducer=(state=initialstate,action)=>{
    console.log(action.type, action.payload,state);
    switch(action.type){
        case ActionTypes.LOADING_MEDICINES:
        return{
            ...state,
            isloading:true,
            error:''
        }
        case ActionTypes.GET_MEDISION:
        return{
            ...state,
            isloading:false,
            medicines:action.payload,
            error:''
        }
        case ActionTypes.ERROR_MEDICINES:
        return{
            ...state,
            isloading:false,
            medicines:[],
            error:action.payload
        }
        case ActionTypes.POST_MEDICINES:
            return{
                ...state,
                isloading:false,
                medicines:state.medicines.concat(action.payload),
                error:''
            }
            case ActionTypes.DELETE_MEDICINES:
            return{
                ...state,
                isloading:false,
                medicines:state.medicines.filter((d)=>d.id!==action.payload),
                error:''
            }
            case ActionTypes.UPDATE_MEDICINES:
            return{
                ...state,
                isloading:false,
                medicines:state.medicines.map((l)=>{
                    if(l.id===action.payload.id){
                        return action.payload
                    }
                    else{
                         return l
                    }
                }),
                error:''
            }
        default:
            return state;
    }
}