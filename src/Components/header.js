import React from 'react';
import {Grid, Typography, styled} from '@material-ui/core'


const Container = styled(Grid)({
  background:"#e71d36",
  paddingTop:50,
  paddingBottom:50,
  color:"white",
  marginBottom:35
})

const Header = () => {
    return (
    <Grid item xs={12}>
     <Container container justify="center" alignItems="center">
         <Typography variant="h4" align="center">
             Buscar recetas de bebidas
         </Typography>
     </Container>
    </Grid>
    );
}
 
export default Header;