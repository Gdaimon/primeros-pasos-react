import React from 'react'

export const Listas = () => {

// const estadoInicial = [1,2,3,4,5,6]
// const [lista, setLista] = React.useState([1,2,3,4,5,6])

const estadoInicial = [
    {id:1, texto: 'Tarea 1'},
    {id:2, texto: 'Tarea 2'},
    {id:3, texto: 'Tarea 3'},
    {id:4, texto: 'Tarea 4'},
]
const [lista, setLista] = React.useState(estadoInicial)

const handleAdicionarElemento =()=>{
    console.log('Click en el boton');
    setLista([
        ...lista,
        {id:5, texto: 'Tarea 5'}
    ])
}

    return (
        <div>
            <h2>Listas</h2>
            <ul>
            {
                // Forma Uno
                // lista.map((elemento, index)=>{
                //     return <h4 key={index}>Numero: {elemento}</h4>
                // })
                // forma dos
                // lista.map((elemento, index)=>
                //     (<h4 key={index}>Numero: {elemento}</h4>)
                // )
                // forma Tres
                // lista.map((elemento, index)=> <h4 key={index}>Numero: {elemento}</h4>                )
                lista.map((tarea)=> 
                (
                    <li key={tarea.id}>{tarea.texto}</li>
                ))
            }
            </ul>
            <button className="btn btn-info text-white"
            onClick={()=> handleAdicionarElemento()}
             >Adicionar Elementos</button>
        </div>
    )
}
