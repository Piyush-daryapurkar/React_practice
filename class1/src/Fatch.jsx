import React from 'react'
import { useState,useEffect } from 'react'

const Fatch = () => {

    const [initial , final] = useState([]);


     useEffect(()=>{
        const myfun=async()=>{

            const responce = await fetch('https://fakestoreapi.com/products')
            const data =await responce.json();
            final(data)
        }
        myfun();
     },[])


     const [num , numfinal] = useState(null);



  return (
    <>

    <h1>fake json server</h1>

    <form action="">
        <tr>
            <th>title</th>
            <th>discription</th>
            <th>price</th>
            <th>add</th>
         
        </tr>
        {
            initial.map((e)=>(
                <>
                  <tr>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td>{e.price}</td>
                    {/* <td ><img src={e.image} alt="" className='img' /></td> */}
                    <button></button>

                  </tr>
                </>

            ))
        }
    </form>
      
    </>
  )
}

export default Fatch
