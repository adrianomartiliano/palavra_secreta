import React, { useState, useRef } from "react";
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

    const [letra, setLetra] = useState("");
    const [letraInputRef, setLetraInputRef] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        VerificaPalavra(letra)
        setLetra("")
    }

    return(
        <div className="jogando">
            <p className="pontuacao">
                Pontuação: <span>{pontuacao}</span>
            </p>
            <h3>Dica sobre a palavra: <span className="dica">{categoria}</span></h3>
            <p>Tentativas restantes: <span>{tentativas}</span></p>

            <div className="containerPalavra">
                {letras.map((letraAtual, i) =>(
                    letrasAcertadas.includes(letraAtual) ? (
                        <span key={i} className="letra">
                            {letraAtual}
                        </span>
                    ) : (
                        <span key={i} className="vazio"></span>
                    )
                ))}
                
            </div>
            <div className="containerLetra">
                <p>Acerte a letra...</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="letra" 
                        maxLength="1" 
                        required
                        onChange={(e) => setLetra(e.target.value) }
                        value={letra}
                        ref={letraInputRef}
                    
                    />
                    <button className="btnOk">Verificar</button>
                </form>
            </div>

            <div className="letrasErradas">
                <p>Letras utilizadas: {letrasErradas.join(', ')}</p>
            </div>
        </div>
    );
}

export default Jogando;