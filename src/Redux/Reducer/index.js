import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reduce";
import { medicineReducer } from "./medicin.reducer";

export const rootReducer=combineReducers({
        counter:counterReducer,
        medicines:medicineReducer
})