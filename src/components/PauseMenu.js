import './PauseMenu.css'
import './Board.css';



const resumeGame = ({ setIsPause, resumeDropTime }) => {
    setIsPause(false);
    resumeDropTime();
    document.getElementById('Board').focus();
}
const quitGame = ({ setGameOver }) => {
    setGameOver(true);
}

export const PauseMenu = ({setIsPause, setGameOver, resumeDropTime}) => {
    return (
        <div className="PauseMenu">
            <div className="PauseMenu__center">
                <button className="button" onClick={() => resumeGame({setIsPause, resumeDropTime})}> Resume </button>
                <button className="button" onClick={()=> quitGame({setGameOver}) }> Quit </button>
                <button> Settings </button>
            </div>
        </div>
            
    )
}

export default PauseMenu;

