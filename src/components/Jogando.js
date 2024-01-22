import React from "react";
import "./jogando.css";

const Jogando = ( { VerificaPalavra }) => {
    return(
        <div>
            <h2 className="title">Jogando</h2>
            <button onClick={VerificaPalavra}>FINALIZAR O JOGO</button>
        </div>
    );
}

export default Jogando;