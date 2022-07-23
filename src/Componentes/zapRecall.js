import React from "react";
import Card from "./Card"




let contador = 0;
export default function ZapRecall(){
  const [click, setClick] = React.useState(false);
    return (
        <>
            <div className = "container">
                <div className="topo">
                    <img src="assets/logo.png" alt="logo"/>
                    <b>ZapRecall</b>
                </div>
                <Card />
                <div className="rodape">
                    <p>{contador}/4 CONCLUÍDOS</p>
                </div>
            </div>
        </>
    );
}


// function Perguntas (zap){
//     const [eClicado, setEclicado] = React.useState(zap.clicou)
//     if (zap.clicou !== eClicado){
//         setEclicado (zap.clicou);
//     }

//     function click (){
//         zap.cliclou = !eClicado;
//         setEclicado (zap.cliclou);
//     }

// return (
//     zap.pergunta.map((objeto, index)=>(
//         <>
//     <div className="perguntas">
        
//         <div className="pergunta">
//             <p> {objeto.questao} {index+1}</p>
//             <ion-icon name="play-outline" onclick = {click} ></ion-icon>
//         </div>
//     </div>
//     </>
//     )))
// }

const arrayquestoes = [
    {  
      pergunta : " O que é JSX?", 
      resposta : "Uma extensão de linguagem do JavaScript"
      
    },
    {  
      pergunta : "O React é __ ", 
      resposta : " uma biblioteca JavaScript para construção de interfaces"
    },
    {  
      pergunta : "Componentes devem iniciar com __", 
      resposta : " letra maiúscula" 
    },
    {  
      pergunta : "Podemos colocar __ dentro do JSX ", 
      resposta : "expressões" 
    }
]; 