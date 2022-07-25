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
    },
    {   pergunta: "O ReactDOM nos ajuda __",
        resposta: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {   pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências"
    },
    {   pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes"
    },
    {   pergunta: "Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
    ];
    
    

export default function Card (){
    
    const [resultado, setResultado] = React.useState(0);
    const [icons, setIcons] = React.useState("");
        console.log(icons);
    return ( 
        <>
         <div className="perguntas">
         {questoes.map((objeto, index) => (
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
                 <p>{resultado}/8 CONCLUÍDOS</p>
                 
                 <div className="resultado">
                   <ion-icon name={icons}></ion-icon>
                </div>
                
            </div> 
            </div>
        </>
    )
}