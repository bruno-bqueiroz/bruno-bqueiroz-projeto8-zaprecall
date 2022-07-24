import react from "react";

function CardAberto ({setResposta}){
    return (
        <div className="perguntas">
            <p onClick={() => setResposta(true)}>
                Card Aberto
            </p>
        </div>
    )
}
export default CardAberto;
