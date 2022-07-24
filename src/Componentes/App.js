import PaginaInicial from "./PaginaInicial";
import React from "react";
import ZapRecall from "./zapRecall";


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