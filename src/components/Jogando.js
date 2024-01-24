import React from "react";
import "./jogando.css";

const Jogando = ( { VerificaPalavra, categoriaEscolhida }) => {

    const categoria = categoriaEscolhida;
    //console.log(categoria);
    return(
        <div className="jogando">
            <p className="pontuacao">
                Pontuação: <span>000</span>
            </p>
            <h3>Dica sobre a palavra: <span className="dica">Dica{categoria}</span></h3>

            <div className="containerPalavra">
                <span className="letra">A</span>
                <span className="vazio"></span>
                <span className="vazio"></span>
                <span className="vazio"></span>
                <span className="vazio"></span>
                <span className="vazio"></span>
            </div>

            <div className="containerLetra">
                <p>Acerte a letra...</p>
                <form>
                    <input type="text" name="letra" maxLength="1" required/>
                    <button className="btnOk">Verificar</button>
                </form>
            </div>

            <div className="letrasErradas">
                <p>Letras utilizadas:
                    <span>a, </span>
                    <span>b, </span>
                </p>
            </div>
        </div>
    );
}

export default Jogando;