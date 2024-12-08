import React from 'react'
import { useState,useEffect } from 'react'

const Usestate = () => {
    const[initial,updateinitial]=useState("my name is")

    const myfun=(()=>{
        updateinitial("PIYSSH")
    })

    useEffect(()=>{
        myfun();
    },[])


    const[var1,updatevar1]=useState(null)


    const[num,updatenum]=useState(0)

  return (
    <>


    <h1>initial={initial}</h1>

    <h1>initial:~{var1}</h1>

    <input type="text" value={var1} onChange={(e)=>updatevar1(e.target.value)} />


    <h1>number's={num}</h1>
    <button onClick={(e)=>updatenum(num+1)}>single</button>
    <button onClick={(e)=>updatenum(num+6)}>chakka</button>
    
       
    </>
  )
}

export default Usestate
