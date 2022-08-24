import { createContext, useReducer } from "react";
import { themeReducer } from "../../../cityhospital/src/Context/Reducer/ThemeReducer";


const themeContext = createContext();
const intial={
    theme:'light',
}
export const ThemeProvider=({children})=>{
    const [state,dispatch]=useReducer(themeReducer,intial);
    const toogle_theme=(theme)=>{
        const newtheme
    }
}