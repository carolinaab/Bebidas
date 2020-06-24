import React, { useContext, useState } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, CardActions, Button } from '@material-ui/core'
import { Modal } from '@material-ui/core'
import { ModalContext } from '../Context/modalContext'

const getModalStyle = () => {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 10,
        maxWidth: '100%',
        height: '100%',
        boxSizing: 'border-box'
    },
    media: {
        height: 350,

    },
    paper: {
        position: 'absolute',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: "auto",
        height: 500,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '85%',
        }
    }

}));

const CardReceta = ({ receta }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const { guardarIdReceta, informacion, guardarReceta } = useContext(ModalContext)

    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for (let i = 0; i < 16; i++) {
            if (informacion[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={informacion[`strIngredient${i}`]}>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                )
            } 
        }
        return (ingredientes)
    }

    return (

        <Grid item xs={11} md={4}>
            <Card className={classes.root}>

                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {receta.strDrink}
                        </Typography>

                    </CardContent>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="imagen de bebidas"
                        height="140"
                        image={receta.strDrinkThumb}
                        title="Contemplative Reptile"
                    />

                </CardActionArea>
                <CardActions>
                    <Button onClick={() => {
                        guardarIdReceta(receta.idDrink);
                        handleOpen()
                    }} fullWidth variant="contained" color="secondary">Ver Receta</Button>
                </CardActions>
            </Card>
            <Modal open={open} onClose={() => {
                handleClose();
                guardarReceta({})
                guardarIdReceta(null)
            }}>
                <Grid container justify="center" spacing={2} alignItems="center" style={modalStyle} className={classes.paper}>
                    <Grid item xs={12}>
                        <Typography variant="h4">{informacion.strDrink}</Typography>
                        <Typography variant="h5">Instrucciones</Typography>
                        <Typography variant="body1">{informacion.strInstructions}</Typography>

                    </Grid>
                    <Grid item cs={12}>
                        <img width="100%" height="350px" src={informacion.strDrinkThumb} alt="imagen de bebida"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">Ingredientes</Typography>
                    </Grid>
                    <Grid item xs={12} >

                        <ul key={informacion.idDrink}>
                            {mostrarIngredientes(informacion)}
                        </ul>
                    </Grid>
                </Grid>
            </Modal>
        </Grid>


    );
}

export default CardReceta;