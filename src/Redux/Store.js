import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer'

export const configurstore=()=>{
    let store = createStore(rootReducer, applyMiddleware(thunk))
    return store;
}