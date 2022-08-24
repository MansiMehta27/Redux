import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reduce";
import { doctorsReducer } from "./doctor.reducer";
import { medicineReducer } from "./medicin.reducer";


export const rootReducer=combineReducers({
        counter:counterReducer,
        medicines:medicineReducer,
        doctors:doctorsReducer
})