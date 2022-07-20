import React from 'react';
import { useEffect } from 'react';

function PromiseExample(props) {
    const one =()=>{
         return "one excute"
    }
    const two=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve ("two")
            },2000)
        })
       
      
    }
    const three=()=>{
         return "three excute"
    }
    const all=async()=>{
        const o = one();
        console.log(o);

        const t = await two();
        console.log(t);

        const th = three();
        console.log(th);
    }
    useEffect( () => {
        all();
     },
     [])
     const display = (z)=>{
        console.log(z);
     }
     const sim = (display)=>{
        let x = 10,y = 5
        let z;
        z=x+y;
        display(z)
     }
     sim(display)
   return (
            <div>

            </div>
         );
}

export default PromiseExample;