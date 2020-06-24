import React, { useContext } from 'react'
import { RecetasContext } from '../Context/recetasContext'
import { Grid, Box} from '@material-ui/core'
import CardReceta from '../Components/cardReceta'


const Listado = () => {
   
    const { recetas } = useContext(RecetasContext)
    return (
         
             (recetas !== undefined) &&
             <Box p={{ xs: 0, md: 3 }} >
             <Grid container justify="center" alignItems="stretch" spacing={2}>
                 {
                     recetas.map(receta => (
                             <CardReceta key={receta.idDrink} receta={receta} />
                         
                     ))
                 }
             </Grid>
 
         </Box >
        
       
    )
}

export default Listado