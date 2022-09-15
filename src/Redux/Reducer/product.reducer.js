import * as ActionTypes from "../ActionTypes"
const initialstate = {
    isloading: false,
    product: [],
    error: ''
}
export const productReducer = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOADING_PRODUCT:
            return {
                ...state,
                isloading: true,
                error: ''
            }
        case ActionTypes.GET_PRODUCT:
            return {
                ...state,
                isloading: false,
                product: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_PRODUCT:
            return {
                ...state,
                isloading: false,
                product: [],
                error: action.payload
            }
        case ActionTypes.POST_PRODUCT:
            return {
                ...state,
                isloading: false,
                product: state.product.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                isloading: false,
                product: state.product.filter((d) => d.id !== action.payload),
                error: ''
            }
        case ActionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                isloading: false,
                product: state.product.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload
                    }
                    else {
                        return l
                    }
                }),
                error: ''
            }
        default:
            return state;
    }
}