
import React from "react";
import CardAberto from "./CardAberto";

export default function CardFechado ({index}){
    const [card, setCard] = React.useState(false);
    
    return (
        <>{!card ? 
            <>    
        <p> Pergunta {index}</p>
        <ion-icon name="play-outline" onClick = {() => setCard(true)}></ion-icon>
        </> : <CardAberto />
        }
        </>            
    )
}
