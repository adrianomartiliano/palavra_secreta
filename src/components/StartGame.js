import "./startgame.css";

const StartGame = ({Iniciando}) => {

    return (
        <div>
            <h2 className='title'>Palavra Secreta</h2>
            <button onClick={Iniciando}>COMEÇAR O JOGO</button>
        </div>
    )

}

export default StartGame;