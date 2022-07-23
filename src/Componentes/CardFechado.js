import React from "react";

export default function CardFechado (setCard){

    return (
        <div className="perguntas">
             <div className="pergunta">
             <p> Pergunta</p>
             <ion-icon name="play-outline" onClick = {() => setCard(true)}></ion-icon>
            </div>
        </div>
    )
}