
import React from "react"
import CardFechado from "./CardFechado";

const questoes = [
    {   pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript"
    },
    {   pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {   pergunta: "Componentes devem iniciar com __?",
        resposta: " letra maiúscula"
    },
    {   pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões"
    }
    ];
    const deckGame = [];
    function createDeck() {
        questoes.forEach((value) => {
        deckGame.push({ ...value });
      });
    
      deckGame.sort(() => Math.random() - 0.5);
      return deckGame;
    }
    
    createDeck();
    

export default function Cards (){
    
    const [resultado, setResultado] = React.useState(0);
    const [icons, setIcons] = React.useState([]);
    
    
    function verificaErro(respostas){
        if (respostas.includes("close-circle")){
            return true;
        } else return false;
    }


    return ( 
        <>
         <div className="perguntas">
         {deckGame.map((objeto, index) => (
                <div className="caixa" key={index}>
                    <CardFechado
                arrayPergunta = {objeto.pergunta}
                    arrayResposta = {objeto.resposta}
                index = {index + 1}
                    setResultado = {setResultado}
                    setIcons = {setIcons}
                icons = {icons}
                    />
                </div>
             ))}
            <div className="rodape">
                 <p>{resultado}/4 CONCLUÍDOS</p>
                 <div className="resultado">
                {resultado == 4  ? verificaErro(icons)? <div className="finalizado"> Jogo Finalizado com erro</div> :<div>jogo finalizado sem erros</div> : <></>}
                {
                    
                icons.map((objeto,index)=>{
                    
                 return (
                    
                    <div className="resultado" key={index}>
                        
                     <ion-icon name={objeto}></ion-icon>
                     
                     </div> 
                    
                    )

                }
                    
                )}
                </div>
                
            </div> 
            </div>
        </>
    )
}