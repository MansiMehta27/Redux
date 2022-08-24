import * as ActionTypes  from "../ActionTypes"
const initialstate={
    isloading:false,
    doctors:[],
    error:''
}
export const doctorsReducer=(state=initialstate,action)=>{
    console.log(action.type, action.payload,state);
    switch(action.type){
        case ActionTypes.LOADING_DOCTORES:
        return{
            ...state,
            isloading:true,
            error:''
        }
        case ActionTypes.GET_DOCTORES:
        return{
            ...state,
            isloading:false,
           doctors:action.payload,
            error:''
        }
        case ActionTypes.ERROR_DOCTORES:
        return{
            ...state,
            isloading:false,
            doctors:[],
            error:action.payload
        }
        case ActionTypes.POST_DOCTORES:
            return{
                ...state,
                isloading:false,
                doctors:state.medicines.concat(action.payload),
                error:''
            }
            case ActionTypes.DELETE_DOCTORES:
            return{
                ...state,
                isloading:false,
                doctors:state.doctors.filter((d)=>d.id!==action.payload),
                error:''
            }
            case ActionTypes.UPDATE_DOCTORES:
            return{
                ...state,
                isloading:false,
                doctors:state.doctors.map((l)=>{
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