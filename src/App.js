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
  const [palavra] = useState(palavras);
  
  //Mudando o estagio do jogo (Iniciando)
  const Iniciando = () => {
    setEstagioJogo(estagios[1].name);
  }

  //Verifica se a palavra foi acertada
  const VerificaPalavra = () => {
    setEstagioJogo(estagios[2].name);
  }

  //Reinicia o jogo
  const Reset = () => {
    setEstagioJogo(estagios[0].name);
  }

  return (
    <div className="App">
        
      {estagioJogo === "inicio" && <StartGame Iniciando={ Iniciando } />}
      {estagioJogo === "jogando" && <Jogando VerificaPalavra={ VerificaPalavra }/>}
      {estagioJogo === "fim" && <Fimdejogo Reset={ Reset }/>}
    </div>
  );
}

export default App;
