import React from "react"
import CardFechado from "./CardFechado";


const questoes = [
    {   pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript",
        card : false
    },
    {   pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces",
        card : false
    },
    {   pergunta: "Componentes devem iniciar com __?",
        resposta: " letra maiúscula",
        card : false
    },
    {   pergunta: "Podemos colocar __ dentro do JSX",
        resposta: "expressões",
        card : false
    },
    {   pergunta: "O ReactDOM nos ajuda __",
        resposta: "interagindo com a DOM para colocar componentes React na mesma",
        card : false
    },
    {   pergunta: "Usamos o npm para __",
        resposta: "gerenciar os pacotes necessários e suas dependências",
        card : false
    },
    {   pergunta: "Usamos props para __",
        resposta: "passar diferentes informações para componentes",
        card : false
    },
    {   pergunta: "Usamos estado (state) para __",
        resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        card : false
    }
    ];

export default function Card (){
  
    return ( 
         <>
         <div className="perguntas">
         {questoes.map((objeto, index) => (
                <div className="caixa" key={index}>
                    <CardFechado index = {index + 1}/>
                </div>
             ))}
            </div>
         </>
     )
}
