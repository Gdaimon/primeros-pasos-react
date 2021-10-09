import React, {useState} from 'react'

export const Eventos = () => {

// let texto = 'Hola desde el componente Evento'
const [texto, setTexto] = useState('Hola desde el componente Evento')



const handleClick = ()=>{
   console.log('Chaos....') 
   // no se puede hacer directamente, esto solo sirve para obtener el valor
//    texto = 'lo borre...!'
   setTexto('lo borre...!')
}

    return (
        <div>
            <hr />
            <h2>Eventos</h2>
            <h3>{texto}</h3>
            <button onClick={()=>handleClick()} >Presioname...!</button>
        </div>
    )
}
