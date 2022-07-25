import React from 'react';
import { useState } from 'react';

function UseContextExample(props) {
    const[dark,setdark]=useState();
    const[light,setlight]=useState();

    const theme = {
        backgroundColor : dark ? '#fff': '#000',
        color : dark ? '#000' : '#fff'
   }
    return (
        <div style={theme}>
                    <input type="radio"value="dark"name='theme'onClick={()=>setdark(!dark)} />dark
                    <input type="radio"value="light"name='theme'onClick={()=>setdark(!dark)}/>light
        </div>
    );
}

export default UseContextExample;