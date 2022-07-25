import { TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Listitem from './Listitem';

function UseCallbackExample(props) {
     const [dark,setdark]=useState(false)
     const[number,setnumber]=useState(0)

     const theme = {
         backgroundColor : dark ? '#fff': '#000',
         color : dark ? '#000' : '#fff'
 }
 const getItem = useCallback((i)=>{
    console.log("callbackfunction");
        return[i+number, i+number+1, i+number+2];
 }, [number])


    return (
       <>
        <div style={theme}>
                 <button onClick={()=>setdark(!dark)}>change theme</button>  
                 <TextField type="text" placeholder='plase enter number' onChange={(e)=>setnumber(parseInt(e.target.value))}/>

                 <Listitem getItem={getItem}/>
        </div>
      
       
       </>
    );
}

export default UseCallbackExample;