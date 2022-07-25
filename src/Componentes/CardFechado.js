
import React from "react";
let contador = 0;
let iCones = "";


export default function CardFechado (
    {arrayPergunta,
    arrayResposta,
    index,
    setIcons,
    icons,
    setResultado}){
    const [card, setCard] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);
    
    function click(){
        setCard(!card);
        contador ++;  
    }
    setResultado (contador);
    
function vermelho(){
    iCones = "close-circle";
    
}
function amarelo(){
    iCones = "help-circle";
    
}


 

return (

    <>
    {!card ? 
        <>    
            <div className="caixa-fechada">
                <p> Pergunta {index}</p>
                <ion-icon name="play-outline" onClick = {() => setCard(true)}></ion-icon>
            </div>
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
                <div className="botao-resposta" onClick = {click}>
            <div className="vermelho" onClick = {()=>setIcons("close-circle")}>
                <p>Não lembrei</p>
            </div>
            <div className="amarelo" onClick = {()=>setIcons("help-circle")}>
                <p>Quase não lembrei</p>
            </div>

                <div className="verde" onClick = {()=>setIcons("checkmark-circle")}>
                    <p>Zap!</p>
                </div>
            </div>
        </div>
        
        </>
        }
        </> 
                  
    )
}

