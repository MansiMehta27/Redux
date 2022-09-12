import * as ActionTypes  from "../ActionTypes"
const initialstate={
    isloading:false,
    category:[],
    error:''
}
export const categoryReducer=(state=initialstate,action)=>{
    console.log(action.type, action.payload,state);
    switch(action.type){
        case ActionTypes.LOADING_CATEGORY:
        return{
            ...state,
            isloading:true,
            error:''
        }
        case ActionTypes.GET_CATEGORY:
        return{
            ...state,
            isloading:false,
            category:action.payload,
            error:''
        }
        case ActionTypes.ERROR_CATEGORY:
        return{
            ...state,
            isloading:false,
            category:[],
            error:action.payload
        }
        case ActionTypes.POST_CATEGORY:
            return{
                ...state,
                isloading:false,
                category:state.category.concat(action.payload),
                error:''
            }
            case ActionTypes.DELETE_CATEGORY:
            return{
                ...state,
                isloading:false,
                category:state.category.filter((d)=>d.id!==action.payload),
                error:''
            }
            case ActionTypes.UPDATE_CATEGORY:
            return{
                ...state,
                isloading:false,
                category:state.category.map((l)=>{
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