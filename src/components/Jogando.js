import React from "react";
import "./jogando.css";

const Jogando = ( { VerificaPalavra, categoriaEscolhida }) => {

    const categoria = categoriaEscolhida;
    //console.log(categoria);
    return(
        <div>
            <h2 className="title">Jogando</h2>
            <h3>Dica: {categoria}</h3>
            
            <button onClick={VerificaPalavra}>FINALIZAR O JOGO</button>
        </div>
    );
}

export default Jogando;