import React from "react";
import "./jogando.css";

const Jogando = ( { 
    VerificaPalavra, 
    categoria,
    letrasAcertadas, 
    letrasErradas,
    pontuacao,
    tentativas, 
    letras
}) => {

    return(
        <div className="jogando">
            <p className="pontuacao">
                Pontuação: <span>{pontuacao}</span>
            </p>
            <h3>Dica sobre a palavra: <span className="dica">{categoria}</span></h3>
            <p>Tentativas restantes: <span>{tentativas}</span></p>

            <div className="containerPalavra">
                {letras.map((letras, i) =>(
                    letrasAcertadas.includes(letras) ? (
                        <span key={i} className="letra">
                            {letras[i]}
                        </span>
                    ) : (
                        <span key={i} className="vazio"></span>
                    )
                ))}
                
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