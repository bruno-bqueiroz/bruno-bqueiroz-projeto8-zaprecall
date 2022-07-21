let contador = 0;
export default function Pagina2(){
    return (
        <>
            <div className = "container">
                <div className="topo">
                    <img src="assets/logo.png" alt="logo"/>
                    <b>ZapRecall</b>
                </div>
                <div className="perguntas">
                    <div className="pergunta marcado">
                        <p>Pergunta 1</p>
                        <ion-icon name="close-circle"></ion-icon>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 2</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 3</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="pergunta ">
                        <p>Pergunta 4</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
                <div className="rodape">
                    <p>{contador}/4 CONCLUÍDOS</p>
                    <div className="resultado">
                        <ion-icon name="checkmark-circle"></ion-icon>
                        <ion-icon name="close-circle"></ion-icon>
                        <ion-icon name="help-circle"></ion-icon>
                    </div>
                </div>
            </div>
        </>
    )
}