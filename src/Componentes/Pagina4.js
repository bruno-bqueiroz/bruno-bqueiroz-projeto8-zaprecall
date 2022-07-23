let contador = 0;
export default function Pagina4 (){
    return (
        <>
        <div className = "container">
                <div className="topo">
                    <img src="assets/logo.png" alt="logo"/>
                    <b>ZapRecall</b>
                </div>
                <div className="perguntas">
                    <div className="texto-pergunta">
                        <div className="texto"><p>JSX é uma sintaxe para
                            escrever HTML dentro do JS</p></div>
                        <div className="botaoResposta">
                            <div className="botao-resposta vermelho">
                            <p>Não lembrei</p>
                            </div>
                            <div className="botao-resposta amarelo">
                            <p>Quase não lembrei</p>
                            </div>
                            <div className="botao-resposta verde">
                            <p>Zap!</p>
                            </div>
                        </div> 
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