import React from "react";
import Card from "./Card"




let contador = 0;
export default function ZapRecall(){
    return (
        <>
            <div className = "container">
                <div className="topo">
                    <img src="assets/logo.png" alt="logo"/>
                    <b>ZapRecall</b>
                </div>
                <Card />
                <div className="rodape">
                    <p>{contador}/4 CONCLUÍDOS</p>
                </div>
            </div>
        </>
    );
}
