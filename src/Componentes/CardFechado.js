
import React from "react";


export default function CardFechado (
    {arrayPergunta,
    arrayResposta,
    index}){
    const [card, setCard] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);

return (
    <>{!card ? 
        <>    
            <p> Pergunta {index}</p>
            <ion-icon name="play-outline" onClick = {() => setCard(true)}></ion-icon>
        </> : !resposta ?
        <>
            <p> {arrayPergunta}</p>
            <div className="setinha"  onClick = {() => setResposta(true)}>
                <img src="assets/setinha.png" alt="logo"/>
            </div>
        </> :
        <>  
            <div className="botaoResposta">
            <p> {arrayResposta}</p>
            <div className="botao-resposta">
            <div className="vermelho">
                <p>Não lembrei</p>
            </div>
            <div className="amarelo">
                <p>Quase não lembrei</p>
            </div>
            <div className="verde">
                <p>Zap!</p>
            </div>
            </div>
            </div>
        </>
        }
        </>            
    )
}
