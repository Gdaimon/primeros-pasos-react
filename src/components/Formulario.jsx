import React from 'react'

export const Formulario = () => {

    const [comida, setComida] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const [listaComidas, setListaComidas] = React.useState([])

    const handleComida = (e) => {
        console.log(e.target.value);
        setComida(e.target.value)
    }

    const guardarDatos = function (e) {
        // Evito el comportamiento por defcto del navegador
        // Que no envie el formualrio y no refresque el navegador
        e.preventDefault()
        // console.log(e.target)

        // Validacion
        if(!comida.trim()){
            console.log('Campo comida vacio')
            return
        }

        if(!descripcion.trim()){
            console.log('Campo descripcion vacio')
            return
        }

        // Llamado base de datos
        console.log('Se guardaron los datos')

        // Asignacion de nuevos elemntos
        setListaComidas
        (
            [
                // accedmos a el valor actual del estado
            ...listaComidas,
            // Asignacion del nuevo elemnto
            {
                nombre: comida,
                descripcion:descripcion
            }
        ])


        // Limpieza del estado
        setComida('')
        setDescripcion('')
        // Limpiar los campos del formulario
        e.target.reset()
    }

    return (
        <div>
            <h2>Formulario</h2>
            <hr />
            {comida}
            <form onSubmit={guardarDatos}>

                <input
                    type="text"
                    placeholder="Ingrese su comida"
                    className="form-control mb-2"
                    name="comida"
                    onChange={handleComida}
                />

                <input
                    type="text"
                    placeholder="Descripcion de la comida"
                    className="form-control  mb-2"
                    name="descripcion"
                    // Asignamos el evento de cambio al input y accedemos al valor del input mediante su target.value
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <button className="btn btn-outline-success">Aidcionar Elemento</button>

            </form>

            <hr />
            <ul>
                {/* Iterar el arreglo */}
                {
                    // Transformar el objeto en una etiqueta html
                    // Importante siempre que iteremos debos usar el atributo key
                    // podemos usar el id del callback pero no se recomienda
                    listaComidas.map((item, i)=>(
                        // Acceser a los atributos del objeto
                        <li key={i}>{item.nombre} - {item.descripcion}</li>
                    ))
                }
            </ul>

        </div>
    )
}
