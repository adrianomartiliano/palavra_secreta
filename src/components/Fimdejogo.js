import React from "react";
import "./fimdejogo.css";

const Fimdejogo = ( {Reset, pontuacao} ) => {
    return(
        <div>
            <h2 className="title">Fim de jogo</h2>
            <p>Sua pontuação foi: <span>{pontuacao}</span></p>
            <button onClick={Reset}>REINICIAR O JOGO</button>
        </div>
    )
}

export default Fimdejogo;