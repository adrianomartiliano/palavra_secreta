//CSS
import './App.css';

//Hooks
import { useCallback, useEffect, useState } from 'react';

//Data
import {palavras} from './data/data';

//Components
import StartGame from './components/StartGame';
import Jogando from './components/Jogando';
import Fimdejogo from './components/Fimdejogo';

const estagios = [
  {id: 1, name: 'inicio'},
  {id: 2, name: 'jogando'},
  {id: 3, name: 'fim'}
]

function App() {

  const [estagioJogo, setEstagioJogo] = useState(estagios[0].name);
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letras, setLetras] = useState("");

  const [letrasAcertadas, setLetrasAcertadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(3);
  const [pontuacao, setPontuacao] = useState(0);

  const palavaEcategoria = () => {
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)];
    
    return { categoria, palavra };
  }

  const Iniciando = () => {
    const { categoria, palavra } = palavaEcategoria();
    setEstagioJogo(estagios[1].name);
    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);


    //Criando array de letras
    let listLetras = palavra.split("");

    setCategoriaEscolhida(categoria);
    setLetras(listLetras);
  }

  const VerificaPalavra = () => {
    setEstagioJogo(estagios[2].name);
  }

  const Reset = () => {
    setEstagioJogo(estagios[0].name);
  }

  return (
    <div className="App">
      {estagioJogo === "inicio" && <StartGame Iniciando={Iniciando} />}
      {estagioJogo === "jogando" && <Jogando 
                                        VerificaPalavra={ VerificaPalavra } 
                                        categoria={ categoriaEscolhida }
                                        palavra={ palavraEscolhida }
                                        letrasAcertadas={ letrasAcertadas}
                                        letrasErradas={ letrasErradas }
                                        pontuacao={ pontuacao }
                                        tentativas={ tentativas }
                                        letras = { letras}
                                        />}
      {estagioJogo === "fim" && <Fimdejogo Reset={Reset} />}
    </div>
  );
}

export default App;