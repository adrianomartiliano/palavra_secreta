import React from "react";
import "./fimdejogo.css";

const Fimdejogo = ( {Reset} ) => {
    return(
        <div>
            <h2 className="title">Fim de jogo</h2>
            <button onClick={Reset}>REINICIAR O JOGO</button>
        </div>
    )
}

export default Fimdejogo;