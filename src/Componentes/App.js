import PaginaInicial from "./PaginaInicial";
import React from "react";
import ZapRecall from "./zapRecall";
//import Pagina3 from "./Pagina3";
//import Pagina4 from "./Pagina4";
//import Pagina5 from "./Pagina5";
//import Pagina6 from "./UltimaPagina";

export default function App() {
    const [tela, setTela] = React.useState(true)
    
    return (
      
          <>
      <div>
        {tela ? (
          <div className="container">
          <PaginaInicial/>
          <div className="button" onClick={() => setTela(!tela)}>Iniciar Recall!</div>
          </div>
        ) : (
          <ZapRecall />
        )}
      </div>
    </>
    );
}