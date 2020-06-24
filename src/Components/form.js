import React, { useContext, useState } from 'react';
import { Grid, styled, Button, Typography } from '@material-ui/core'
import { CategoriasContext } from '../Context/categoriaContext'
import { RecetasContext } from '../Context/recetasContext'

const Input = styled('input')({
    width: "97%",
    height: 30
})
const Select = styled('select')({
    width: "100%",
    height: 35
})
const ErrorText = styled(Typography)({
    color:"red",
    marginBottom: 10
})


const Formulario = () => {
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    
    const [error, setError] = useState(false)
    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas, guardarConsulta } = useContext(RecetasContext)

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos = e => {
        e.preventDefault();
        buscarRecetas(busqueda)
        guardarConsulta(true)
        // validar datos
        if(categoria === '' || nombre.trim() === ''){
            setError(true);
            return;
        }
        setError(false)
       
    }
    const {nombre, categoria} = busqueda


    return (
        <>
        
        {
            error &&
            <ErrorText variant='body1' align="center" >Todos los campos deben estar llenos</ErrorText>
        }
            <Grid container justify="center" alignItems="center">

                <Grid item xs={8}>
                    <Grid container justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Input name="nombre" placeholder="Buscar Receta" onChange={obtenerDatosReceta} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Select name="categoria" onChange={obtenerDatosReceta}>
                                <option>Selecciona Categoría </option>
                                {categorias.map(categoria => (
                                    <option key={categoria.strCategory} value={categoria.strCategory}>
                                        {categoria.strCategory}
                                    </option>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button fullWidth onClick={enviarDatos} variant="contained" color="secondary">Buscar receta</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Formulario;