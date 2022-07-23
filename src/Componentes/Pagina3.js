let contador = 0;
export default function Pagina3 (){
    return (
        <>
        {/* isso não muda */}
        <div className = "container">
                <div className="topo">
                    <img src="assets/logo.png" alt="logo"/>
                    <b>ZapRecall</b>
                </div>

                {/* começa a mudar daqui */}
                <div className="perguntas">
                    <div className="resposta">
                        <div className="texto"><p>O que é JSX?</p></div>
                        <div className="setinha"><img src="assets/setinha.png" alt="logo"/></div>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 2</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 3</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 4</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
                <div className="rodape">
                    <p>{contador}/4 CONCLUÍDOS</p>
                </div>
            </div>
        </>
    )
}