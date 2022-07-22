import React, { useMemo, useState } from 'react';

function UseHookExample(props) {
   const [number,setnumber]=useState(0)
   const [count,setcount]=useState(0)

    const findfactorial=(n)=>{
        console.log("findfactorial");
        if(n>1){
            return n*findfactorial(n-1)
        }else{
            return 1
        }
    }
    const Result = useMemo(()=>{
        return findfactorial (number)},[number])

    return (
        <div>
                <input type="text" placeholder='enter valid num'onChange={(e)=>setnumber(e.target.value)}/>
                <button onClick={()=>setcount(count+1)}>Counter</button>
                <p>Counter value is:{count}</p>
                <p>factorial value is:{Result}</p>
        </div>
);
}
export default UseHookExample;