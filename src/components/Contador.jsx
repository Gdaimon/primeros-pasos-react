import React, { useState } from 'react'

export const Contador = () => {

    const [ contador, setContador] = useState(0)

    const handleContador = ()=>{
        setContador(contador+1)
    }

    return (
        <>
        <hr />
         <h2>Contador</h2>   
         <p>El numero del contador es: <span>{contador}</span></p>

        <h4>
            {
                contador > 2 ? 'Contador es mayor a dos' : 'Es menor a dos'
            }
        </h4>

        {/* Forma Uno */}
        {/* <button onClick={()=> handleContador()} >Aumentar</button> */}
        {/* Forma 2 */}
        <button onClick={()=> setContador(contador+1)} >Aumentar</button>

        </>
    )
}
