
import React from "react";
let contador = 0;


export default function CardFechado (
    {arrayPergunta,
    arrayResposta,
    index,
    setIcons,
    icons,
    setResultado}){
    const [card, setCard] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);
    const [bloqueado, setBloqueado] = React.useState(false);
    
    function click(){
        setCard(!card);
        contador ++;  
    }
    setResultado (contador);
    
function vermelho(){
    const iCones = "close-circle";
    setIcons([...icons, iCones]);
    setBloqueado(false);
    
}
function amarelo(){
    const iCones = "help-circle";
    setIcons([...icons, iCones]);
    setBloqueado(false);
}
function verde(){
    const iCones = "checkmark-circle";
    setIcons([...icons, iCones]);
    setBloqueado(false);
}

 

return (

    <>
    {!card && !bloqueado  ? 
        <>    
            <div className="caixa-fechada">
                <p> Pergunta {index}</p>
                <ion-icon name="play-outline" onClick = {() => setCard(true)}></ion-icon>
            </div>
        </> : !resposta && !bloqueado ?
        <>
            <p> {arrayPergunta}</p>
            <div className="setinha"  onClick = {() => setResposta(true)}>
                <img src="assets/setinha.png" alt="logo"/>
            </div>
        </> : !bloqueado ?
        <>  
            <div className="botaoResposta">
                <p> {arrayResposta}</p>
                <div className="botao-resposta" onClick = {click}>
            <div className="vermelho" onClick = {vermelho}>
                <p>Não lembrei</p>
            </div>
            <div className="amarelo" onClick = {amarelo}>
                <p>Quase não lembrei</p>
            </div>

                <div className="verde" onClick = {verde}>
                    <p>Zap!</p>
                </div>
            </div>
        </div>
        
        </> :<>
            <p> {arrayPergunta}</p>
            <div className="setinha">
                <img src="assets/setinha.png" alt="logo"/>
            </div>
        </>
        }
        </> 
                  
    )
}

