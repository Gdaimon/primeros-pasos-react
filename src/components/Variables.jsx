// FC
export const Variables = () => {

const saludar = "Hola Como estas...!"
const url = 'https://images.pexels.com/photos/3727182/pexels-photo-3727182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    return (
        <>
            <h2>{saludar}</h2>
            <img src={url} alt="bella chica" />
        </>
    )
}
