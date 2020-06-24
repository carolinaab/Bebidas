import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {
    const [idReceta, guardarIdReceta] = useState(null)
    const [informacion, guardarReceta]= useState({})  
    //llama a la api cada vez que se elige una receta y se ejecuta cada que idReceta cambia
    useEffect(() => {
        const obtenerReceta = async () => {
          if(!idReceta) return;
          const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
          const resultado = await axios.get(url)
          guardarReceta(resultado.data.drinks[0])
        }
        obtenerReceta()
    },[idReceta])

    return ( 
        <ModalContext.Provider
        value={{
            guardarIdReceta,
            guardarReceta,
            informacion
        }}
        >
        {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;