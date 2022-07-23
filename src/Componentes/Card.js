import React from "react"
import CardFechado from "./CardFechado";
import CardAberto from "./CardAberto";
import CardVirado from "./CardVirado";

export default function Card (props){

    const [card, setCard] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);





    
    return ( 
        <>
         <div className="perguntas">
          {!card ?
           <CardFechado setCard = {setCard}/>

           : !resposta?
             <CardAberto setResposta = {setResposta} />
            : <CardVirado />
            }</div>
        </>
    )
}


