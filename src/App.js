import React from 'react';
import Header from './Components/header'
import Formulario from './Components/form'
import CategoriasProvider from './Context/categoriaContext'
import RecetaProvider from './Context/recetasContext'
import Listado from './Components/listarRecetas'
import ModalProvider from './Context/modalContext';


function App() {
  return (

    <CategoriasProvider>
      <RecetaProvider>
        <ModalProvider>

          <Header />
          <Formulario />
          <Listado />
        </ModalProvider>
      </RecetaProvider>
    </CategoriasProvider>
  );
}

export default App;
