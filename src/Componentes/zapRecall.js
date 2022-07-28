import React from "react";
import Cards from "./Cards"





export default function ZapRecall(){
    return (
        <>
            <div className = "container">
                <div className="topo">
                    <img src="assets/logo.png" alt="logo"/>
                    <b>ZapRecall</b>
                </div>
                <Cards />
            </div>
        </>
    );
}
