import './PauseMenu.css'
import './Board.css';



const resumeGame = ({ setIsPause }) => {
    setIsPause(false);
    document.getElementById('Board').focus();
}
const quitGame = ({ setGameOver }) => {
    setGameOver(true);
}

export const PauseMenu = ({setIsPause, setGameOver}) => {
    return (
        <div className="PauseMenu">
            <div className="PauseMenu__center">
                <button className="button" onClick={() => resumeGame({setIsPause})}> Resume </button>
                <button className="button" onClick={()=> quitGame({setGameOver}) }> Quit </button>
                <button> Settings </button>
            </div>
        </div>
            
    )
}

export default PauseMenu;

