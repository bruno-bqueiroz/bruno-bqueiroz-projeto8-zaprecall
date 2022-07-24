
import React from "react";

export default function CardFechado ({card, index}){
    const [card, setCard] = React.useState(card);

    function click (){
        setCard (!card);    
    }
    return (
        <>    
        <p> Pergunta {index}</p>
        <ion-icon name="play-outline" onClick = {click}></ion-icon>
        </>            
    )
}
