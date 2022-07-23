let contador = 4;
export default function Pagina6(){
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
                    <div className="pergunta marcado">
                        <p>Pergunta 2</p>
                        <ion-icon name="help-circle"></ion-icon>
                    </div>
                    <div className="pergunta marcado">
                        <p>Pergunta 3</p>
                        <ion-icon name="close-circle"></ion-icon>
                    </div>
                    <div className="pergunta marcado">
                        <p>Pergunta 4</p>
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
                <div className="final">
                    <p>{contador}/4 CONCLUÍDOS</p>
                    <div className="resultado">
                        <ion-icon name="checkmark-circle"></ion-icon>
                        <ion-icon name="close-circle"></ion-icon>
                        <ion-icon name="help-circle"></ion-icon>
                        <ion-icon name="close-circle"></ion-icon>
                    </div>
                </div>
            </div>
        </>
    )
}